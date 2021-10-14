export const GravityTheme = {
    colors: {
        primary: {
            600: '#523774',
            500: '#523774',
            300: '#B89DDA',
        },
        basic: {
            500: '#484451',
            300: '#8E8B94',
            100: '#E1DDEB'
        },
        alert: '#7B61FF'
    },
    fonts: {
        body: "Sofia Pro, sans-serif",
        heading: "Sofia Pro, sans-serif",
        link: "Sofia Pro, sans-serif"
    },
    components: {
        Button: {
            baseStyle: {
                outline: 0,
                bg: "primary.500",
                color: "white",
                fontSize: 18,
                fontWeight: 'bold',
                borderRadius: '0',
            },

            variants: {
                solid: {
                    height: '50px',
                    bg: "primary.500",
                    _hover: {
                        bg: "primary.500",
                    }
                }
            }

        },


        Heading: {
            baseStyle: {
                color: 'black',

                fontSize: 22
            },
            sizes: {
                xl: {
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'black',
                }
            }
        },

        Progress: {
            baseStyle: {
                track: {bg: 'white'},
                filledTrack: {bg: '#FFAC02'}
            },

            variants: {
                black: {
                    track: {bg: 'black'},
                    filledTrack: {bg: '#FFAC02'}
                }
            }
        },
        Divider: {
            baseStyle: {
                height: '2px',
                width: '100%',
                bg: 'black',
                opacity: 1,
                position: 'relative',
                top: '4px'
            }
        },
        Tabs: {
            variants: {
                'contracts-list': {
                    tab: {
                        fontSize: '16px',
                        fontWeight: 500,
                        paddingInlineStart: 0,
                        padding: 0,
                        marginRight: '10px',
                        outline: 0,
                        _focus: {
                            boxShadow: 'none',
                        },
                        _selected: {
                            borderBottom: '1px solid #072833'
                        }
                    },
                    tabpanel: {
                        padding: 0
                    }
                }
            }
        },
        Tag: {
            baseStyle: {
                label: {
                    padding: '4px 10px',
                    fontFamily: 'Montserrat, Roboto Condensed, sans-serif',
                    fontWeight: 500,
                    fontSize: '14px'
                },
                container: {
                    border: '1px solid',
                    borderRadius: 0,
                    height: '29px'
                }
            },
            variants: {
                new: {
                    container: {
                        borderRadius: '4px',
                        borderColor: '#170A4A'
                    },
                    label: {
                        color: '#170A4A',

                    }
                },

                accepted: {
                    container: {
                        borderRadius: '4px',
                        borderColor: '#2CB049'
                    },
                    label: {
                        color: '#2CB049',
                    }
                },

                confirmed: {
                    container: {
                        borderRadius: `4px`,
                        borderColor: '#00A372'
                    },
                    label: {
                        color: '#00A372'
                    },
                },
                NEW: {
                    container: {
                        borderRadius: `4px`,
                        borderColor: '#170A4A'
                    },
                    label: {
                        color: '#170A4A'
                    },
                },
                ACTIVE: {
                    container: {
                        borderRadius: 0,
                        borderColor: '#00A372'
                    },
                    label: {
                        color: '#00A372'
                    },
                },
                pending: {
                    container: {
                        borderRadius: 0,
                        borderColor: '#FFAC02'
                    },
                    label: {
                        color: '#FFAC02'
                    },
                }
            }
        }
    },
    styles: {
        global: {
            body: {
                bg: 'Grey'
            },
            select: {
                marginLeft: `0!important`
            }
        }
    }
}