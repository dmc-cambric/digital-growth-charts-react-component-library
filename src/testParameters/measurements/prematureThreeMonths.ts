import { Measurement } from "../../interfaces/RCPCHMeasurementObject";

export const prematureThreeMonths: Measurement[]=[
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-04-11",
            "chronological_decimal_age": 0.0,
            "corrected_decimal_age": -0.1861738535249829,
            "chronological_calendar_age": "Happy Birthday",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 30,
                "corrected_gestation_days": 2
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 50.0,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.850057779266134,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": -0.00929688975104273,
            "chronological_centile": 49.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.0,
                    "y": 50.0,
                    "b": null,
                    "centile": 49.0,
                    "sds": -0.00929688975104273,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "Happy Birthday",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.1861738535249829,
                    "y": 50.0,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.850057779266134,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "30 + 2 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.0,
                    "y": -0.00929688975104273,
                    "b": null,
                    "centile": 49.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "Happy Birthday",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.1861738535249829,
                    "y": 3.850057779266134,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "30 + 2 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-04-15",
            "chronological_decimal_age": 0.010951403148528405,
            "corrected_decimal_age": -0.17522245037645448,
            "chronological_calendar_age": "4 days",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 30,
                "corrected_gestation_days": 6
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 50.4,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.79021791777047,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.016136411687771274,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.010951403148528405,
                    "y": 50.4,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.016136411687771274,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "4 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.17522245037645448,
                    "y": 50.4,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.79021791777047,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "30 + 6 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.010951403148528405,
                    "y": 0.016136411687771274,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "4 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.17522245037645448,
                    "y": 3.79021791777047,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "30 + 6 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-04-19",
            "chronological_decimal_age": 0.02190280629705681,
            "corrected_decimal_age": -0.16427104722792607,
            "chronological_calendar_age": "1 week and 1 day",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 31,
                "corrected_gestation_days": 3
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 50.7,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.6894828023406796,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": -0.004524365226949466,
            "chronological_centile": 49.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.02190280629705681,
                    "y": 50.7,
                    "b": null,
                    "centile": 49.0,
                    "sds": -0.004524365226949466,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 week and 1 day",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.16427104722792607,
                    "y": 50.7,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.6894828023406796,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "31 + 3 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.02190280629705681,
                    "y": -0.004524365226949466,
                    "b": null,
                    "centile": 49.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 week and 1 day",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.16427104722792607,
                    "y": 3.6894828023406796,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "31 + 3 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-04-23",
            "chronological_decimal_age": 0.03285420944558522,
            "corrected_decimal_age": -0.15331964407939766,
            "chronological_calendar_age": "1 week and 5 days",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 32,
                "corrected_gestation_days": 0
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 51.0,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.5885697830935177,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": -0.022107204206416427,
            "chronological_centile": 49.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.03285420944558522,
                    "y": 51.0,
                    "b": null,
                    "centile": 49.0,
                    "sds": -0.022107204206416427,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 week and 5 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.15331964407939766,
                    "y": 51.0,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.5885697830935177,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "32 + 0 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.03285420944558522,
                    "y": -0.022107204206416427,
                    "b": null,
                    "centile": 49.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 week and 5 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.15331964407939766,
                    "y": 3.5885697830935177,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "32 + 0 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-04-27",
            "chronological_decimal_age": 0.04380561259411362,
            "corrected_decimal_age": -0.14236824093086928,
            "chronological_calendar_age": "2 weeks and 2 days",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 32,
                "corrected_gestation_days": 4
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 51.8,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.699435359782823,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.007557153626246579,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.04380561259411362,
                    "y": 51.8,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.007557153626246579,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 weeks and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.14236824093086928,
                    "y": 51.8,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.699435359782823,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "32 + 4 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.04380561259411362,
                    "y": 0.007557153626246579,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 weeks and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.14236824093086928,
                    "y": 3.699435359782823,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "32 + 4 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-05-01",
            "chronological_decimal_age": 0.05475701574264202,
            "corrected_decimal_age": -0.13141683778234087,
            "chronological_calendar_age": "2 weeks and 6 days",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 33,
                "corrected_gestation_days": 1
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 52.3,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.691101724669004,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": -0.017021347206964688,
            "chronological_centile": 49.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.05475701574264202,
                    "y": 52.3,
                    "b": null,
                    "centile": 49.0,
                    "sds": -0.017021347206964688,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 weeks and 6 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.13141683778234087,
                    "y": 52.3,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.691101724669004,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "33 + 1 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.05475701574264202,
                    "y": -0.017021347206964688,
                    "b": null,
                    "centile": 49.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 weeks and 6 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.13141683778234087,
                    "y": 3.691101724669004,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "33 + 1 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-05-05",
            "chronological_decimal_age": 0.06570841889117043,
            "corrected_decimal_age": -0.12046543463381246,
            "chronological_calendar_age": "3 weeks and 3 days",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 33,
                "corrected_gestation_days": 5
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 52.9,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.733301701264494,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.017668112581910218,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.06570841889117043,
                    "y": 52.9,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.017668112581910218,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "3 weeks and 3 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.12046543463381246,
                    "y": 52.9,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.733301701264494,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "33 + 5 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.06570841889117043,
                    "y": 0.017668112581910218,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "3 weeks and 3 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.12046543463381246,
                    "y": 3.733301701264494,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "33 + 5 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-05-09",
            "chronological_decimal_age": 0.07665982203969883,
            "corrected_decimal_age": -0.10951403148528405,
            "chronological_calendar_age": "4 weeks",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 34,
                "corrected_gestation_days": 2
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 53.4,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.741378530474534,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.009810964679988198,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.07665982203969883,
                    "y": 53.4,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.009810964679988198,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "4 weeks",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.10951403148528405,
                    "y": 53.4,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.741378530474534,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "34 + 2 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.07665982203969883,
                    "y": 0.009810964679988198,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "4 weeks",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.10951403148528405,
                    "y": 3.741378530474534,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "34 + 2 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-05-13",
            "chronological_decimal_age": 0.08761122518822724,
            "corrected_decimal_age": -0.09856262833675565,
            "chronological_calendar_age": "1 month and 2 days",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 34,
                "corrected_gestation_days": 6
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 53.9,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.760313499853755,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.009917606832099659,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.08761122518822724,
                    "y": 53.9,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.009917606832099659,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.09856262833675565,
                    "y": 53.9,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.760313499853755,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "34 + 6 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.08761122518822724,
                    "y": 0.009917606832099659,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.09856262833675565,
                    "y": 3.760313499853755,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "34 + 6 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-05-17",
            "chronological_decimal_age": 0.09856262833675565,
            "corrected_decimal_age": -0.08761122518822724,
            "chronological_calendar_age": "1 month and 6 days",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 35,
                "corrected_gestation_days": 3
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 54.4,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.792597544700541,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.017711448566752764,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.09856262833675565,
                    "y": 54.4,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.017711448566752764,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month and 6 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.08761122518822724,
                    "y": 54.4,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.792597544700541,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "35 + 3 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.09856262833675565,
                    "y": 0.017711448566752764,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month and 6 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.08761122518822724,
                    "y": 3.792597544700541,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "35 + 3 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-05-21",
            "chronological_decimal_age": 0.10951403148528405,
            "corrected_decimal_age": -0.07665982203969883,
            "chronological_calendar_age": "1 month, 1 week and 3 days",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 36,
                "corrected_gestation_days": 0
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 54.8,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.7921819275376043,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": -0.017530208810605085,
            "chronological_centile": 49.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.10951403148528405,
                    "y": 54.8,
                    "b": null,
                    "centile": 49.0,
                    "sds": -0.017530208810605085,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month, 1 week and 3 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.07665982203969883,
                    "y": 54.8,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.7921819275376043,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "36 + 0 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.10951403148528405,
                    "y": -0.017530208810605085,
                    "b": null,
                    "centile": 49.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month, 1 week and 3 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.07665982203969883,
                    "y": 3.7921819275376043,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "36 + 0 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-05-25",
            "chronological_decimal_age": 0.12046543463381246,
            "corrected_decimal_age": -0.06570841889117043,
            "chronological_calendar_age": "1 month and 2 weeks",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 36,
                "corrected_gestation_days": 4
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 55.3,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.8550327852876696,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.004885933772732756,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.12046543463381246,
                    "y": 55.3,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.004885933772732756,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month and 2 weeks",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.06570841889117043,
                    "y": 55.3,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.8550327852876696,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "36 + 4 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.12046543463381246,
                    "y": 0.004885933772732756,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month and 2 weeks",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.06570841889117043,
                    "y": 3.8550327852876696,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "36 + 4 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-05-29",
            "chronological_decimal_age": 0.13141683778234087,
            "corrected_decimal_age": -0.05475701574264202,
            "chronological_calendar_age": "1 month, 2 weeks and 4 days",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 37,
                "corrected_gestation_days": 1
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 55.7,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.8836577806264483,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": -0.016071410620355872,
            "chronological_centile": 49.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.13141683778234087,
                    "y": 55.7,
                    "b": null,
                    "centile": 49.0,
                    "sds": -0.016071410620355872,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month, 2 weeks and 4 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.05475701574264202,
                    "y": 55.7,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.8836577806264483,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "37 + 1 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.13141683778234087,
                    "y": -0.016071410620355872,
                    "b": null,
                    "centile": 49.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month, 2 weeks and 4 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.05475701574264202,
                    "y": 3.8836577806264483,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "37 + 1 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-06-02",
            "chronological_decimal_age": 0.14236824093086928,
            "corrected_decimal_age": -0.04380561259411362,
            "chronological_calendar_age": "1 month, 3 weeks and 1 day",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 37,
                "corrected_gestation_days": 5
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 56.2,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.9748792116928287,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.019455836823590172,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.14236824093086928,
                    "y": 56.2,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.019455836823590172,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month, 3 weeks and 1 day",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.04380561259411362,
                    "y": 56.2,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.9748792116928287,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "37 + 5 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.14236824093086928,
                    "y": 0.019455836823590172,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month, 3 weeks and 1 day",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.04380561259411362,
                    "y": 3.9748792116928287,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "37 + 5 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-06-06",
            "chronological_decimal_age": 0.15331964407939766,
            "corrected_decimal_age": -0.03285420944558522,
            "chronological_calendar_age": "1 month, 3 weeks and 5 days",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 38,
                "corrected_gestation_days": 2
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 56.6,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 4.0248727249354,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.011510070200433186,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.15331964407939766,
                    "y": 56.6,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.011510070200433186,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month, 3 weeks and 5 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.03285420944558522,
                    "y": 56.6,
                    "b": null,
                    "centile": 100.0,
                    "sds": 4.0248727249354,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "38 + 2 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.15331964407939766,
                    "y": 0.011510070200433186,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month, 3 weeks and 5 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.03285420944558522,
                    "y": 4.0248727249354,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "38 + 2 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-06-10",
            "chronological_decimal_age": 0.16427104722792607,
            "corrected_decimal_age": -0.02190280629705681,
            "chronological_calendar_age": "1 month, 4 weeks and 2 days",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 38,
                "corrected_gestation_days": 6
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 57.0,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 4.081187141378417,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.009605004764117683,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.16427104722792607,
                    "y": 57.0,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.009605004764117683,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month, 4 weeks and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.02190280629705681,
                    "y": 57.0,
                    "b": null,
                    "centile": 100.0,
                    "sds": 4.081187141378417,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "38 + 6 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.16427104722792607,
                    "y": 0.009605004764117683,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "1 month, 4 weeks and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.02190280629705681,
                    "y": 4.081187141378417,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "38 + 6 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-06-14",
            "chronological_decimal_age": 0.17522245037645448,
            "corrected_decimal_age": -0.010951403148528405,
            "chronological_calendar_age": "2 months and 3 days",
            "corrected_calendar_age": null,
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 39,
                "corrected_gestation_days": 3
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": "The due date is after the observation date - a calendar age cannot be calculated."
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 57.4,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 4.144187917884887,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.013042015774787726,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.17522245037645448,
                    "y": 57.4,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.013042015774787726,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months and 3 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.010951403148528405,
                    "y": 57.4,
                    "b": null,
                    "centile": 100.0,
                    "sds": 4.144187917884887,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "39 + 3 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.17522245037645448,
                    "y": 0.013042015774787726,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months and 3 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": -0.010951403148528405,
                    "y": 4.144187917884887,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": null,
                    "corrected_gestational_age": "39 + 3 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-06-18",
            "chronological_decimal_age": 0.1861738535249829,
            "corrected_decimal_age": 0.0,
            "chronological_calendar_age": "2 months and 1 week",
            "corrected_calendar_age": "Happy Birthday",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 40,
                "corrected_gestation_days": 0
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 57.8,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 4.209187115957218,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.02143228904014809,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.1861738535249829,
                    "y": 57.8,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.02143228904014809,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months and 1 week",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.0,
                    "y": 57.8,
                    "b": null,
                    "centile": 100.0,
                    "sds": 4.209187115957218,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "Happy Birthday",
                    "corrected_gestational_age": "40 + 0 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.1861738535249829,
                    "y": 0.02143228904014809,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months and 1 week",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.0,
                    "y": 4.209187115957218,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "Happy Birthday",
                    "corrected_gestational_age": "40 + 0 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-06-22",
            "chronological_decimal_age": 0.1971252566735113,
            "corrected_decimal_age": 0.010951403148528405,
            "chronological_calendar_age": "2 months, 1 week and 4 days",
            "corrected_calendar_age": "4 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 40,
                "corrected_gestation_days": 4
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 58.1,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 4.215674351662824,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": -0.013964320180091591,
            "chronological_centile": 49.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.1971252566735113,
                    "y": 58.1,
                    "b": null,
                    "centile": 49.0,
                    "sds": -0.013964320180091591,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months, 1 week and 4 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.010951403148528405,
                    "y": 58.1,
                    "b": null,
                    "centile": 100.0,
                    "sds": 4.215674351662824,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "4 days",
                    "corrected_gestational_age": "40 + 4 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.1971252566735113,
                    "y": -0.013964320180091591,
                    "b": null,
                    "centile": 49.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months, 1 week and 4 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.010951403148528405,
                    "y": 4.215674351662824,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "4 days",
                    "corrected_gestational_age": "40 + 4 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-06-26",
            "chronological_decimal_age": 0.2080766598220397,
            "corrected_decimal_age": 0.02190280629705681,
            "chronological_calendar_age": "2 months, 2 weeks and 1 day",
            "corrected_calendar_age": "1 week and 1 day",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 41,
                "corrected_gestation_days": 1
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 58.5,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 4.264187253771656,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.0037731201136410744,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.2080766598220397,
                    "y": 58.5,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.0037731201136410744,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months, 2 weeks and 1 day",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.02190280629705681,
                    "y": 58.5,
                    "b": null,
                    "centile": 100.0,
                    "sds": 4.264187253771656,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "1 week and 1 day",
                    "corrected_gestational_age": "41 + 1 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.2080766598220397,
                    "y": 0.0037731201136410744,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months, 2 weeks and 1 day",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.02190280629705681,
                    "y": 4.264187253771656,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "1 week and 1 day",
                    "corrected_gestational_age": "41 + 1 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-06-30",
            "chronological_decimal_age": 0.2190280629705681,
            "corrected_decimal_age": 0.03285420944558522,
            "chronological_calendar_age": "2 months, 2 weeks and 5 days",
            "corrected_calendar_age": "1 week and 5 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": 41,
                "corrected_gestation_days": 5
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 58.8,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 4.244455835878341,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": -0.022364081139777846,
            "chronological_centile": 49.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.2190280629705681,
                    "y": 58.8,
                    "b": null,
                    "centile": 49.0,
                    "sds": -0.022364081139777846,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months, 2 weeks and 5 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.03285420944558522,
                    "y": 58.8,
                    "b": null,
                    "centile": 100.0,
                    "sds": 4.244455835878341,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "1 week and 5 days",
                    "corrected_gestational_age": "41 + 5 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.2190280629705681,
                    "y": -0.022364081139777846,
                    "b": null,
                    "centile": 49.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months, 2 weeks and 5 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.03285420944558522,
                    "y": 4.244455835878341,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "1 week and 5 days",
                    "corrected_gestational_age": "41 + 5 weeks",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-07-04",
            "chronological_decimal_age": 0.2299794661190965,
            "corrected_decimal_age": 0.04380561259411362,
            "chronological_calendar_age": "2 months, 3 weeks and 2 days",
            "corrected_calendar_age": "2 weeks and 2 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 59.2,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.883404260950595,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": 0.0037329778721619782,
            "chronological_centile": 50.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.2299794661190965,
                    "y": 59.2,
                    "b": null,
                    "centile": 50.0,
                    "sds": 0.0037329778721619782,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months, 3 weeks and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.04380561259411362,
                    "y": 59.2,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.883404260950595,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "2 weeks and 2 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.2299794661190965,
                    "y": 0.0037329778721619782,
                    "b": null,
                    "centile": 50.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months, 3 weeks and 2 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.04380561259411362,
                    "y": 3.883404260950595,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "2 weeks and 2 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    },
    {
        "birth_data": {
            "birth_date": "1759-04-11",
            "gestation_weeks": 30,
            "gestation_days": 2,
            "estimated_date_delivery": "1759-06-18",
            "estimated_date_delivery_string": "Mon 18 June, 1759",
            "sex": "female"
        },
        "measurement_dates": {
            "observation_date": "1759-07-08",
            "chronological_decimal_age": 0.24093086926762491,
            "corrected_decimal_age": 0.05475701574264202,
            "chronological_calendar_age": "2 months, 3 weeks and 6 days",
            "corrected_calendar_age": "2 weeks and 6 days",
            "corrected_gestational_age": {
                "corrected_gestation_weeks": null,
                "corrected_gestation_days": null
            },
            "comments": {
                "clinician_corrected_decimal_age_comment": "Correction for gestational age has been made.",
                "lay_corrected_decimal_age_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                "clinician_chronological_decimal_age_comment": "No correction has been made for gestational age.",
                "lay_chronological_decimal_age_comment": "This is your child's age without taking into account their gestation at birth."
            },
            "corrected_decimal_age_error": null,
            "chronological_decimal_age_error": null
        },
        "child_observation_value": {
            "measurement_method": "height",
            "observation_value": 59.5,
            "observation_value_error": null
        },
        "measurement_calculated_values": {
            "corrected_sds": 3.7291616188674057,
            "corrected_centile": 100.0,
            "corrected_centile_band": "This height measurement is above the normal range",
            "chronological_sds": -0.01400457197961405,
            "chronological_centile": 49.0,
            "chronological_centile_band": "This height measurement is on or near the 50th centile.",
            "corrected_measurement_error": null,
            "chronological_measurement_error": null,
            "corrected_percentage_median_bmi": null,
            "chronological_percentage_median_bmi": null
        },
        "plottable_data": {
            "centile_data": {
                "chronological_decimal_age_data": {
                    "x": 0.24093086926762491,
                    "y": 59.5,
                    "b": null,
                    "centile": 49.0,
                    "sds": -0.01400457197961405,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months, 3 weeks and 6 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.05475701574264202,
                    "y": 59.5,
                    "b": null,
                    "centile": 100.0,
                    "sds": 3.7291616188674057,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "2 weeks and 6 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            },
            "sds_data": {
                "chronological_decimal_age_data": {
                    "x": 0.24093086926762491,
                    "y": -0.01400457197961405,
                    "b": null,
                    "centile": 49.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "chronological_age",
                    "calendar_age": "2 months, 3 weeks and 6 days",
                    "lay_comment": "This is your child's age without taking into account their gestation at birth.",
                    "clinician_comment": "No correction has been made for gestational age.",
                    "age_error": null,
                    "centile_band": "This height measurement is on or near the 50th centile.",
                    "observation_value_error": null
                },
                "corrected_decimal_age_data": {
                    "x": 0.05475701574264202,
                    "y": 3.7291616188674057,
                    "b": null,
                    "centile": 100.0,
                    "sds": null,
                    "bone_age_label": null,
                    "events_text": null,
                    "bone_age_type": null,
                    "bone_age_sds": null,
                    "bone_age_centile": null,
                    "observation_error": null,
                    "age_type": "corrected_age",
                    "calendar_age": "2 weeks and 6 days",
                    "corrected_gestational_age": "",
                    "lay_comment": "Because your child was born at 30+2 weeks gestation, an adjustment has been made to take this into account.",
                    "clinician_comment": "Correction for gestational age has been made.",
                    "age_error": null,
                    "centile_band": "This height measurement is above the normal range",
                    "observation_value_error": null
                }
            }
        },
        "bone_age": {
            "bone_age": null,
            "bone_age_type": null,
            "bone_age_sds": null,
            "bone_age_centile": null,
            "bone_age_text": null
        },
        "events_data": {
            "events_text": null
        }
    }
]