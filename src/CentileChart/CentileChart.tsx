// libraries
import React, { useState, useLayoutEffect, useMemo, MouseEvent } from 'react';
import styled from 'styled-components';
import {
    createContainer,
    VictoryChart,
    VictoryGroup,
    VictoryLine,
    VictoryScatter,
    VictoryVoronoiContainerProps,
    VictoryZoomContainerProps,
    VictoryTooltip,
    VictoryAxis,
    VictoryLabel,
    VictoryArea,
} from 'victory';

// helper functions
import { getDomainsAndData, getVisibleData } from '../functions/getDomainsAndData';
import { yAxisLabel } from '../functions/yAxisLabel';
import xAxisLabel from '../functions/xAxisLabel';
import tailoredXTickValues from '../functions/tailoredXTickValues';
import defaultToggles from '../functions/defaultToggles';
import { tooltipText } from '../functions/tooltips';
import { delayedPubertyThreshold, makePubertyThresholds, lowerPubertyBorder } from '../functions/DelayedPuberty';

// interfaces & props
import { CentileChartProps } from './CentileChart.types';
import { ICentile, ISexChoice } from '../interfaces/CentilesObject';
import { Measurement } from '../interfaces/RCPCHMeasurementObject';
import { Domains } from '../interfaces/Domains';

// components/subcomponents
import { XPoint } from '../SubComponents/XPoint';
import CustomGridComponent from '../SubComponents/CustomGridComponent';
import RenderTickLabel from '../SubComponents/RenderTickLabel';

// RCPCH Icon:
import icon from '../images/icon.png';
import { isCrowded } from '../functions/isCrowded';
import { EventCaret } from '../SubComponents/EventCaret';
import { MidParentalHeight } from '../SubComponents/MidParentalHeight';

// allows two top level containers: zoom and voronoi
const VictoryZoomVoronoiContainer = createContainer<VictoryZoomContainerProps, VictoryVoronoiContainerProps>(
    'zoom',
    'voronoi',
);

const shadedTermAreaText =
    'Babies born in this shaded area\nare term. It is normal for\nbabies to lose weight over\nthe first two weeks of life.\nMedical review should be sought\nif weight has dropped by more\nthan 10% of birth weight or\nweight is still below birth weight\nthree weeks after birth.';

function CentileChart({
    reference,
    title,
    subtitle,
    measurementMethod,
    sex,
    childMeasurements,
    midParentalHeightData,
    enableZoom,
    styles,
}: CentileChartProps) {
    const [userDomains, setUserDomains] = useState(null);

    const { defaultShowCorrected, defaultShowChronological, showToggle } = defaultToggles(childMeasurements);
    const [showChronologicalAge, setShowChronologicalAge] = useState(defaultShowChronological);
    const [showCorrectedAge, setShowCorrectedAge] = useState(defaultShowCorrected);

    let { computedDomains, chartScaleType, centileData } = useMemo(
        () =>
            getDomainsAndData(
                childMeasurements,
                sex,
                measurementMethod,
                reference,
                showCorrectedAge,
                showChronologicalAge,
            ),
        [childMeasurements, sex, measurementMethod, reference, showCorrectedAge, showChronologicalAge],
    );

    const updatedData = useMemo(() => getVisibleData(sex, measurementMethod, reference, userDomains), [
        sex,
        measurementMethod,
        reference,
        userDomains,
    ]);

    const allowZooming = childMeasurements.length > 0 && enableZoom ? true : false;

    const domains = userDomains || computedDomains;

    const isChartCrowded = isCrowded(domains, childMeasurements);

    let pubertyThresholds: null | any[] = null;

    if (reference === 'uk-who' && measurementMethod === 'height') {
        pubertyThresholds = makePubertyThresholds(domains, sex);
    }

    let termAreaData: null | any[] = null;

    if (
        childMeasurements[0]?.birth_data.gestation_weeks >= 37 &&
        measurementMethod === 'weight' &&
        reference === 'uk-who' &&
        domains?.x[0] < 0.038329911019849415 && // 2 weeks postnatal
        domains?.x[1] >= -0.057494866529774126 // 37 weeks gest
    ) {
        termAreaData = [
            {
                x: -0.057494866529774126,
                y: domains.y[1],
                y0: domains.y[0],
                l: shadedTermAreaText,
            },
            {
                x: 0.038329911019849415,
                y: domains.y[1],
                y0: domains.y[0],
                l: shadedTermAreaText,
            },
        ];
    }

    const onSelectRadioButton = (event: MouseEvent<HTMLButtonElement>) => {
        switch ((event.target as HTMLInputElement).value) {
            case 'unadjusted':
                setShowChronologicalAge(true);
                setShowCorrectedAge(false);
                break;
            case 'adjusted':
                setShowChronologicalAge(false);
                setShowCorrectedAge(true);
                break;
            case 'both':
                setShowChronologicalAge(true);
                setShowCorrectedAge(true);
                break;
            default:
                console.warn('Fall through case on toggle adjusted age function');
        }
        setUserDomains(null);
    };

    const handleZoomChange = (domain: Domains) => {
        setUserDomains(domain);
    };

    // always reset zoom to default when measurements array changes
    useLayoutEffect(() => {
        setUserDomains(null);
    }, [childMeasurements]);

    return (
        <MainContainer>
            <LogoContainer>
                <img src={icon} width={32} height={32} />
            </LogoContainer>

            <TitleContainer>
                <ChartTitle {...styles.chartTitle}>{title}</ChartTitle>
                <ChartTitle {...styles.chartSubTitle}>{subtitle}</ChartTitle>
            </TitleContainer>

            {/* The VictoryChart is the parent component. It contains a Voronoi container, which groups data sets together for the purposes of tooltips */}
            {/* It has an animation object and the domains are the thresholds of ages rendered. This is calculated from the child data supplied by the user. */}
            {/* Tooltips are here as it is the parent component. More information of tooltips in centiles below. */}

            <VictoryChart
                width={styles.chartWidth}
                height={styles.chartHeight}
                padding={styles.chartPadding}
                style={styles.chartMisc}
                domain={computedDomains}
                containerComponent={
                    <VictoryZoomVoronoiContainer
                        allowZoom={allowZooming}
                        allowPan={allowZooming}
                        onZoomDomainChange={handleZoomChange}
                        zoomDomain={domains}
                        labelComponent={
                            <VictoryTooltip
                                constrainToVisibleArea
                                pointerLength={5}
                                cornerRadius={0}
                                flyoutStyle={styles.toolTipFlyout}
                                style={styles.toolTipMain}
                            />
                        }
                        labels={({ datum }) => {
                                return tooltipText(
                                    reference,
                                    datum.l,
                                    measurementMethod,
                                    datum.x,
                                    datum.age_type,
                                    datum.centile_band,
                                    datum.calendar_age,
                                    datum.corrected_gestational_age,
                                    datum.y,
                                    datum.observation_value_error,
                                    datum.age_error,
                                    datum.lay_comment,
                                    datum.sex,
                                    datum.b,
                                    datum.bone_age_label,
                                    datum.bone_age_sds,
                                    datum.bone_age_centile,
                                    datum.bone_age_type,
                                    midParentalHeightData.mid_parental_height,
                                    midParentalHeightData.mid_parental_height_sds,
                                    midParentalHeightData.mid_parental_height_lower_value,
                                    midParentalHeightData.mid_parental_height_upper_value,
                                    datum.childName
                                )
                            }
                        }
                        voronoiBlacklist={['linkLine', 'chronologicalboneagelinkline', 'correctedboneagelinkline']}
                    />
                }
            >

                {/* 
                midparental height centiles 
                These are three lines, the MPH centile, a centile 2SD above it, and another 2SD below
                There is an area fill between the highest and lowest
                */
                }
                
                { midParentalHeightData.mid_parental_height_centile_data && 

                    midParentalHeightData.mid_parental_height_centile_data.map((referenceData, index) => {
                    const centiles = referenceData.uk90_preterm || referenceData.uk_who_infant || referenceData.uk_who_child || referenceData.uk90_child;
                    const lowercentiles = midParentalHeightData.mid_parental_height_lower_centile_data[index].uk90_preterm || midParentalHeightData.mid_parental_height_lower_centile_data[index].uk_who_infant || midParentalHeightData.mid_parental_height_lower_centile_data[index].uk_who_child || midParentalHeightData.mid_parental_height_lower_centile_data[index].uk90_child;
                    const uppercentiles = midParentalHeightData.mid_parental_height_upper_centile_data[index].uk90_preterm || midParentalHeightData.mid_parental_height_upper_centile_data[index].uk_who_infant || midParentalHeightData.mid_parental_height_upper_centile_data[index].uk_who_child || midParentalHeightData.mid_parental_height_upper_centile_data[index].uk90_child;
                    const mpcData = sex === "male" ? centiles.male.height : centiles.female.height;
                    const lowerMPCData = sex === "male" ? lowercentiles.male.height : lowercentiles.female.height;
                    const upperMPCData = sex === "male" ? uppercentiles.male.height : uppercentiles.female.height;
                        return (
                            <VictoryGroup key={'midparentalCentileDataBlock' + index}>
                                {   upperMPCData.map((centile: ICentile, centileIndex: number)=>{
                                    const newData: any = centile.data.map((data, index) => {
                                        let o: any = Object.assign({}, data)
                                        o.y0 = lowerMPCData[centileIndex].data[index].y
                                        return o;
                                    })
                                        return (
                                            <VictoryArea 
                                                name="areaMPH"
                                                key={centile.centile+'-area-'+centileIndex}
                                                data={newData}
                                                style={styles.midParentalArea}
                                            />
                                        )
                                    })
                                }
                                {   lowerMPCData.map((lowercentile: ICentile, centileIndex: number) => {
                                        return (
                                            <VictoryLine
                                                name="lowerCentileMPH"
                                                key={lowercentile.centile + '-' + centileIndex}
                                                padding={{ top: 20, bottom: 20 }}
                                                data={lowercentile.data}
                                                style={styles.midParentalCentile}
                                            />
                                        );
                                })}
                                {mpcData.map((centile: ICentile, centileIndex: number) => {
                                        return (
                                            <VictoryLine
                                                name="centileMPH"
                                                key={centile.centile + '-' + centileIndex}
                                                padding={{ top: 20, bottom: 20 }}
                                                data={centile.data}
                                                style={styles.midparentalCentile}
                                            />
                                        );
                                })}
                                {upperMPCData.map((uppercentile: ICentile, centileIndex: number) => {
                                        return (
                                            <VictoryLine
                                                name="upperCentileMPH"
                                                key={uppercentile.centile + '-' + centileIndex}
                                                padding={{ top: 20, bottom: 20 }}
                                                data={uppercentile.data}
                                                style={styles.midparentalCentile}
                                            />
                                        );
                                })}
                                
                            </VictoryGroup>
                        );
                    })
                }

                {
                    /* Term child shaded area: */
                    termAreaData !== null && <VictoryArea style={styles.termArea} data={termAreaData} />
                }

                {/* X axis: */}
                <VictoryAxis
                    label={xAxisLabel(chartScaleType, domains)}
                    style={styles.xAxis}
                    tickValues={tailoredXTickValues[chartScaleType]}
                    tickLabelComponent={
                        <RenderTickLabel
                            specificStyle={styles.xTicklabel}
                            chartScaleType={chartScaleType}
                            domains={domains}
                        />
                    }
                    gridComponent={<CustomGridComponent chartScaleType={chartScaleType} />}
                />

                {
                    /* render the y axis */
                    <VictoryAxis
                        minDomain={0}
                        label={yAxisLabel(measurementMethod)}
                        style={styles.yAxis}
                        dependentAxis
                    />
                }

                {/* This is the shaded area below the 0.4th centile in late childhood/early adolescence */}
                {/* Any measurements plotting here are likely due to delayed puberty */}
                {/* The upper border is the 0.4th centile so this must come before the centiles */}

                {
                    // delayed puberty area:
                    pubertyThresholds !== null && (
                        <VictoryArea
                            data={delayedPubertyThreshold(sex)}
                            y0={(d: any) => lowerPubertyBorder(d, sex)}
                            style={styles.delayedPubertyArea}
                            name="delayed"
                        />
                    )
                }

                {/* Render the centiles - loop through the data set, create a line for each centile */}
                {/* On the old charts the 50th centile was thicker and darker and this lead parents to believe it was therefore */}
                {/* the line their children should follow. This was a design mistake, since it does not matter which line the child is on  */}
                {/* so long as they follow it. The middle line was therefore 'de-emphasised' on the newer charts. */}
                {/* For each reference data set, there are 9 centiles. The 0.4th, 9th, 50th, 91st, 99.6th are all dashed. */}
                {/* The 2nd, 25th, 75th, 98th are all continuous lines. As there are 4 datasets, this means 36 separate line series to render. */}
                {/* It is essential each centile from each reference is plotted as a series to prevent interpolation between centiles of one reference  */}
                {/* and centiles of another. The discontinuous lines reflect the transition between references and are essential */}
                {/* One final line is the VictoryArea, which represents the shaded area at the onset of puberty. Children that plot here */}
                {/* will have delayed puberty. */}
                {/* Tooltips are found in the parent element (VictoryChart). Tooltips included: */}
                {/* 1 for each centile, 1 for the shaded area, 1 at 2years to indicate children are measured standing leading */}
                {/* to a step down in height weight and bmi in the data set. There is another tool tip at 4 years to indicate transition from datasets. */}

                {centileData &&
                    centileData.map((referenceData, index) => {
                        return (
                            <VictoryGroup key={'centileDataBlock' + index}>
                                {referenceData.map((centile: ICentile, centileIndex: number) => {
                                    if (centileIndex % 2 === 0) {
                                        // even index - centile is dashed
                                        return (
                                            <VictoryLine
                                                key={centile.centile + '-' + centileIndex}
                                                padding={{ top: 20, bottom: 20 }}
                                                data={centile.data}
                                                style={styles.dashedCentile}
                                            />
                                        );
                                    } else {
                                        // uneven index - centile is continuous
                                        return (
                                            <VictoryLine
                                                key={centile.centile + '-' + centileIndex}
                                                padding={{ top: 20, bottom: 20 }}
                                                data={centile.data}
                                                style={styles.continuousCentile}
                                            />
                                        );
                                    }
                                })}
                            </VictoryGroup>
                        );
                    })
                }


                {
                    // puberty threshold lines uk90:
                    pubertyThresholds !== null &&
                        pubertyThresholds.map((dataArray) => {
                            if (dataArray[0].x > domains.x[0] && dataArray[1].x < domains.x[1]) {
                                return (
                                    <VictoryLine
                                        key={dataArray[0].x}
                                        name={`puberty-${dataArray[0].x}`}
                                        style={styles.delayedPubertyThresholdLine}
                                        data={dataArray}
                                        labels={({ datum }) => datum.label}
                                        labelComponent={
                                            <VictoryLabel
                                                textAnchor="start"
                                                angle={-90}
                                                dx={5}
                                                dy={10}
                                                style={styles.delayedPubertyThresholdLabel}
                                            />
                                        }
                                    />
                                );
                            } else {
                                return null;
                            }
                        })
                }

                {/* { midParentalHeightData.mid_parental_height &&
                    <MidParentalHeight
                        sds={midParentalHeightData.mid_parental_height_sds}
                        centile={midParentalHeightData.mid_parental_height_centile}
                        data={[{x: 20, y: midParentalHeightData.mid_parental_height}]}
                        styles = {styles}
                    />
                } */}

                {/* create a series for each child measurements data point: a circle for chronological age, a cross for corrected */}
                {/* If data points are close together, reduce the size of the point */}

                {childMeasurements.map((childMeasurement: Measurement, index) => {
                    if (
                        childMeasurement.measurement_calculated_values.corrected_measurement_error ||
                        childMeasurement.measurement_calculated_values.chronological_measurement_error
                    ) {
                        return null;
                    }
                    const chronData: any = {
                        ...childMeasurement.plottable_data.centile_data.chronological_decimal_age_data,
                    };
                    const correctData: any = {
                        ...childMeasurement.plottable_data.centile_data.corrected_decimal_age_data,
                    };

                    if (isChartCrowded) {
                        chronData.size = 1.5;
                        correctData.size = 1.5;
                    } else {
                        chronData.size = 3;
                        correctData.size = 3;
                    }
                    return (
                        <VictoryGroup key={'measurement' + index}>

                            { childMeasurement.events_data.events_text && childMeasurement.events_data.events_text.length > 0 &&
                                <VictoryScatter 
                                    name="eventcaret"
                                    data={[{x: childMeasurement.measurement_dates.chronological_decimal_age, y: childMeasurement.child_observation_value.observation_value}]}
                                    dataComponent={
                                        <EventCaret 
                                            eventsText={childMeasurement.events_data.events_text}
                                        />
                                    }
                                />
                            }
                            
                            { showChronologicalAge && childMeasurement.bone_age.bone_age && ( showChronologicalAge || showCorrectedAge ) && !( showCorrectedAge && showChronologicalAge ) && // bone age linked to chronological age
                                <VictoryScatter // bone age
                                    name="chronologicalboneage"
                                    data={[chronData]}
                                    x={"b"}
                                    y={"y"}
                                    size={15}
                                    dataComponent={<XPoint isBoneAge={true}/>}
                                />
                            }

                            { showCorrectedAge && childMeasurement.bone_age.bone_age &&  // bone age linked to corrected age
                                <VictoryScatter // bone age
                                    name="correctedboneage"
                                    data={[correctData]}
                                    x={"b"}
                                    y={"y"}
                                    size={15}
                                    dataComponent={
                                        <XPoint isBoneAge={true}/>
                                    }
                                />
                            }
                            { showChronologicalAge && !showCorrectedAge && childMeasurement.bone_age.bone_age &&// bone age line linked to chronological age
                                <VictoryLine // bone age link line
                                    name="chronologicalboneagelinkline"
                                    data={[{x: chronData.x, y: chronData.y}, {x: chronData.b, y: chronData.y}]}
                                    style={{
                                        data: {
                                            strokeWidth: 2,
                                            stroke: '#A9A9A9',
                                            strokeDasharray: '3, 3',
                                        }
                                    }}
                                />
                            }

                            { showCorrectedAge && childMeasurement.bone_age.bone_age && // bone age line linked to corrected age
                                <VictoryLine // bone age link line
                                    name="correctedboneagelinkline"
                                    data={[{x: correctData.x, y: correctData.y}, {x: correctData.b, y: correctData.y}]}
                                    style={{
                                        data: {
                                            strokeWidth: 2,
                                            stroke: '#A9A9A9',
                                            strokeDasharray: '3, 3',
                                        }
                                    }}
                                />
                            }
                            { showChronologicalAge && (
                                <VictoryScatter // chronological age
                                    data={[chronData]}
                                    symbol="circle"
                                    style={styles.measurementPoint}
                                    name="chronological_age"
                                />
                            )}
                            { showCorrectedAge && (
                                <VictoryScatter // corrected age - a custom component that renders a cross
                                    data={[correctData]}
                                    dataComponent={<XPoint isBoneAge={false}/>}
                                    style={styles.measurementPoint}
                                    name="corrected_age"
                                />
                            )}
                            { showChronologicalAge &&
                                showCorrectedAge && ( // only show the line if both cross and dot are rendered
                                    <VictoryLine
                                        name="linkLine"
                                        style={styles.measurementLinkLine}
                                        data={[chronData, correctData]}
                                    />
                            )}
                        </VictoryGroup>
                    );
                })}
            </VictoryChart>

            {(showToggle || allowZooming) && (
                <ButtonContainer>
                    {showToggle && (
                        <StyledRadioButtonGroup
                            {...styles.toggleStyle}
                            handleClick={onSelectRadioButton}
                            correctedAge={showCorrectedAge}
                            chronologicalAge={showChronologicalAge}
                            className="toggleButtons"
                        />
                    )}
                    {allowZooming && (
                        <StyledButton
                            {...styles.toggleStyle}
                            onClick={() => setUserDomains(null)}
                            enabled={userDomains !== null}
                        >
                            Reset Zoom
                        </StyledButton>
                    )}
                </ButtonContainer>
            )}
        </MainContainer>
    );
}

const MainContainer = styled.div`
    display: block;
    margin: auto;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: 'center';
    padding-left: 5px;
`;

const TitleContainer = styled.div`
    display: inline-block;
    text-align: center;
    margin: 0px;
`;

export const ChartTitle = styled.h2<{
    fontFamily: string;
    color: string;
    fontSize: number;
    fontWeight: string;
    fontStyle: string;
    show?: boolean;
}>`
    font-family: ${({ fontFamily }) => fontFamily};
    font-size: ${({ fontSize }) => fontSize}px;
    font-weight: ${({ fontWeight }) => fontWeight};
    font-style: ${({ fontStyle }) => fontStyle};
    line-height: 1.3em;
    padding: 0px;
    margin: 5px;
    color: ${({ color }) => color};
    visibility: ${({ show }) => (show === false ? 'hidden' : 'visible')};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: 'center';
`;

export const StyledButton = styled.button<{
    activeColour: string;
    inactiveColour: string;
    fontFamily: string;
    fontSize: number;
    fontWeight: string;
    fontStyle: string;
    color: string;
    enabled: boolean;
    margin?: string;
}>`
    display: inline-block;
    background-color: ${(props) => (props.enabled ? props.activeColour : props.inactiveColour)};
    border: 2px solid ${(props) => (props.enabled ? props.activeColour : props.inactiveColour)};
    padding: 4px 11px;
    margin: ${({ margin }) => margin ?? '0px 20px'};
    font-family: Arial;
    font-size: 14px;
    min-height: 30px;
    font-family: ${({ fontFamily }) => fontFamily};
    font-size: ${({ fontSize }) => fontSize}px;
    font-weight: ${({ fontWeight }) => fontWeight};
    font-style: ${({ fontStyle }) => fontStyle};
    color: ${({ color }) => color};
    &:hover {
        background-color: ${(props) => (props.enabled ? props.activeColour : props.inactiveColour)};
        color: ${({ color }) => color};
        border: 2px solid ${(props) => (props.enabled ? props.activeColour : props.inactiveColour)};
        outline: ${(props) => (props.enabled ? props.activeColour : 'transparent')} solid 2px;
    }
    &:focus {
        outline: ${(props) => (props.enabled ? props.activeColour : 'transparent')} solid 2px;
    }
`;

const AgeRadioButtonGroup = (props) => {
    return (
        <div onChange={props.handleClick} className={props.className}>
            <input
                type="radio"
                id="adjusted"
                value="adjusted"
                name="adjustments"
                defaultChecked={props.correctedAge && props.chronologicalAge === false}
            />
            <label htmlFor="adjusted">Adjusted Age</label>
            <input
                type="radio"
                id="unadjusted"
                value="unadjusted"
                name="adjustments"
                defaultChecked={props.chronologicalAge && props.correctedAge === false}
            />
            <label htmlFor="unadjusted">Unadjusted Age</label>
            <input
                type="radio"
                id="both"
                value="both"
                name="adjustments"
                defaultChecked={props.correctedAge === props.chronologicalAge}
            />
            <label htmlFor="both">Both Ages</label>
        </div>
    );
};

const StyledRadioButtonGroup = styled(AgeRadioButtonGroup)<{
    activeColour: string;
    inactiveColour: string;
    fontFamily: string;
    fontSize: number;
    fontWeight: string;
    fontStyle: string;
    color: string;
    className: string;
}>`
    label {
        display: inline-block;
        padding: 5px 11px;
        font-family: ${({ fontFamily }) => fontFamily};
        font-size: ${({ fontSize }) => fontSize}px;
        font-weight: ${({ fontWeight }) => fontWeight};
        font-style: ${({ fontStyle }) => fontStyle};
        color: ${({ color }) => color};
        cursor: pointer;
        background-color: ${(props) => props.inactiveColour};
        min-height: 30px;
    }
    input[type='radio']:checked + label {
        color: ${({ color }) => color};
        background-color: ${(props) => props.activeColour};
    }
    input[type='radio'] {
        display: none;
    }
`;

export default CentileChart;
