import { Measurement } from "../../interfaces/RCPCHMeasurementObject";

export const termGirlWithSingleHeightMeasurementAndBoneAgeAndEvent:Measurement[] = [
    {
    "birth_data": {
        "birth_date": "2020-04-12",
        "gestation_weeks": 40,
        "gestation_days": 0,
        "estimated_date_delivery": "2020-04-12",
        "estimated_date_delivery_string": "Sun 12 April, 2020",
        "sex": "female"
    },
    "measurement_dates": {
        "observation_date": "2024-06-12",
        "chronological_decimal_age": 4.167008898015058,
        "corrected_decimal_age": 4.167008898015058,
        "chronological_calendar_age": "4 years and 2 months",
        "corrected_calendar_age": "4 years and 2 months",
        "corrected_gestational_age": {
            "corrected_gestation_weeks": null,
            "corrected_gestation_days": null
        },
        "comments": {
            "clinician_corrected_decimal_age_comment": "Born at term. No correction has been made for gestation.",
            "lay_corrected_decimal_age_comment": "Your child was born on their due date.",
            "clinician_chronological_decimal_age_comment": "Born Term. No correction has been made for gestation.",
            "lay_chronological_decimal_age_comment": "Your child was born on their due date."
        },
        "corrected_decimal_age_error": null,
        "chronological_decimal_age_error": null
    },
    "child_observation_value": {
        "measurement_method": "height",
        "observation_value": 95.0,
        "observation_value_error": null
    },
    "measurement_calculated_values": {
        "corrected_sds": -1.8809326924150185,
        "corrected_centile": 3.0,
        "corrected_centile_band": "This height measurement is on or near the 2nd centile.",
        "chronological_sds": -1.8809326924150185,
        "chronological_centile": 3.0,
        "chronological_centile_band": "This height measurement is on or near the 2nd centile.",
        "corrected_measurement_error": null,
        "chronological_measurement_error": null,
        "corrected_percentage_median_bmi": null,
        "chronological_percentage_median_bmi": null
    },
    "plottable_data": {
        "centile_data": {
            "chronological_decimal_age_data": {
                "x": 4.167008898015058,
                "y": 95.0,
                "b": 5.0,
                "centile": 3.0,
                "sds": -1.8809326924150185,
                "bone_age_label": "This bone age is advanced",
                "events_text": [
                    "Growth hormone start",
                    "Growth Hormone Deficiency diagnosis"
                ],
                "bone_age_type": "greulich-pyle",
                "bone_age_sds": 2.0,
                "bone_age_centile": 98.0,
                "observation_error": null,
                "age_type": "chronological_age",
                "calendar_age": "4 years and 2 months",
                "lay_comment": "Your child was born on their due date.",
                "clinician_comment": "Born Term. No correction has been made for gestation.",
                "age_error": null,
                "centile_band": "This height measurement is on or near the 2nd centile.",
                "observation_value_error": null
            },
            "corrected_decimal_age_data": {
                "x": 4.167008898015058,
                "y": 95.0,
                "b": 5.0,
                "centile": 3.0,
                "sds": -1.8809326924150185,
                "bone_age_label": "This bone age is advanced",
                "events_text": [
                    "Growth hormone start",
                    "Growth Hormone Deficiency diagnosis"
                ],
                "bone_age_type": "greulich-pyle",
                "bone_age_sds": 2.0,
                "bone_age_centile": 98.0,
                "observation_error": null,
                "age_type": "corrected_age",
                "calendar_age": "4 years and 2 months",
                "corrected_gestational_age": "",
                "lay_comment": "Your child was born on their due date.",
                "clinician_comment": "Born at term. No correction has been made for gestation.",
                "age_error": null,
                "centile_band": "This height measurement is on or near the 2nd centile.",
                "observation_value_error": null
            }
        },
        "sds_data": {
            "chronological_decimal_age_data": {
                "x": 4.167008898015058,
                "y": -1.8809326924150185,
                "b": 5.0,
                "centile": 3.0,
                "sds": null,
                "bone_age_label": "This bone age is advanced",
                "events_text": [
                    "Growth hormone start",
                    "Growth Hormone Deficiency diagnosis"
                ],
                "bone_age_type": "greulich-pyle",
                "bone_age_sds": 2.0,
                "bone_age_centile": 98.0,
                "observation_error": null,
                "age_type": "chronological_age",
                "calendar_age": "4 years and 2 months",
                "lay_comment": "Your child was born on their due date.",
                "clinician_comment": "Born Term. No correction has been made for gestation.",
                "age_error": null,
                "centile_band": "This height measurement is on or near the 2nd centile.",
                "observation_value_error": null
            },
            "corrected_decimal_age_data": {
                "x": 4.167008898015058,
                "y": -1.8809326924150185,
                "b": 5.0,
                "centile": 3.0,
                "sds": null,
                "bone_age_label": "This bone age is advanced",
                "events_text": [
                    "Growth hormone start",
                    "Growth Hormone Deficiency diagnosis"
                ],
                "bone_age_type": "greulich-pyle",
                "bone_age_sds": 2.0,
                "bone_age_centile": 98.0,
                "observation_error": null,
                "age_type": "corrected_age",
                "calendar_age": "4 years and 2 months",
                "corrected_gestational_age": "",
                "lay_comment": "Your child was born on their due date.",
                "clinician_comment": "Born at term. No correction has been made for gestation.",
                "age_error": null,
                "centile_band": "This height measurement is on or near the 2nd centile.",
                "observation_value_error": null
            }
        }
    },
    "bone_age": {
        "bone_age": 5.0,
        "bone_age_type": "greulich-pyle",
        "bone_age_sds": 2.0,
        "bone_age_centile": 98.0,
        "bone_age_text": "This bone age is advanced"
    },
    "events_data": {
        "events_text": [
            "Growth hormone start",
            "Growth Hormone Deficiency diagnosis"
        ]
    }
}]