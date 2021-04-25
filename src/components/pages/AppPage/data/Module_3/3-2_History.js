const HistoryGloria = {
    id: 8,
    personage: "gloria",
    cover: 'bg-clothing',
    title: 'history-2',
    desc: "Gloria ha logrado organizarse financieramente. Sus locales de ropa cada vez van mejor y ahora considera que podría solicitar un crédito con su banco. ¿Será una buena idea?",
    ptsMax: 12,
    answer: {
        pages: [
            {
                desc: "Gloria por teléfono: ¡Hola! Tus consejos han sido maravillosos. Gracias a ti ahora estoy más organizada y tengo muy claros los números de mis locales. Creo que podría solicitar un crédito por primera vez.",
                question: "¿Debería hacerlo?"
            }
        ],
        options: [
            { option: "A", id: "1" },
            { option: "B", id: "2" },
            { option: "C", id: "3" }
        ]
    },
    listOptions: [
    // 1
        {
            id: "1",
            type: "buena",
            desc: "Si tienes alguna oportunidad para hacer crecer el negocio con esa inversión podrías considerarlo. Un crédito bien negociado te permitiría aumentar las ventas, pero recuerda que los planes de expansión no siempre salen como uno espera. Llama al banco y revisemos qué te ofrecen.",
            answer: {
                pages: [
                    {
                        desc: [
                            "¡Qué emoción! Nunca me había sentido tan organizada y con tanta claridad al hablar con el banco. Les expliqué cómo estaba manejando el negocio, como habían incrementado mis ventas, como tenía organizado mi sistema de registro y cómo proyectaba mis gastos. Al parecer me fue bien. ",
                            "Me preguntaron en qué invertiría el préstamo y les conté sobre el nuevo local que quiero abrir al norte de la ciudad. Van a revisar todos los papeles y me llaman. "
                        ]
                    },
                    {
                        desc: [
                            'Al banco le gustó el plan de crecimiento que les expuse y me están ofreciendo diferentes opciones de crédito. ¿Cuál debería escoger? ',
                            'El plan que expuse, basado en los históricos y en lo aprendido en el curso, fue el siguiente: ',
                            '- Alquiler, adecuación e inventario de un nuevo local por $ 60.000.000 COP',
                            '- Ventas estimadas mensuales después del tercer mes: $ 20.000.000 COP',
                            '- Costos totales: $ 15.000.000 COP'
                        ]
                    },
                    {
                        desc: [
                            "Préstamo de $ 120.000.000 COP",
                            '- Tasa 1,8 % mensual',
                            '- Tiempo 24 meses'
                        ]
                    },
                    {
                        desc: [
                            "Préstamo de $ 100.000.000 COP",
                            '- Tasa 2,2 % mensual',
                            '- Tiempo 24 meses',
                            '- Tres meses de periodo de gracia '
                        ]
                    },
                    {
                        desc: [
                            "Préstamo de $ 60.000.000",
                            "- Tasa 2 %",
                            "- Tiempo 24 meses",
                            "- Tres meses de gracia"
                        ]
                    }
                ],
                options: [
                    { option: 'A', id: '1.1'},
                    { option: 'B', id: '1.2'},
                    { option: 'C', id: '1.3'}
                ]
            }
        },
        // 1.1
            {
                id: '1.1',
                type: "mala",
                desc: 'Definitivamente es mejor que aseguremos los $ 120.000.000 COP. Tiene una tasa baja y podemos utilizar ese dinero si se presenta una oportunidad en el camino.',
                answer: {
                    pages: [
                        {
                            desc: "¿Estás seguro? Creo que endeudarme en el doble de lo que necesito es bastante. Creo que me iré con los $ 60.000.000 COP."
                        },
                        {
                            desc: [
                                'Unos meses después: ',
                                "Todo iba muy bien, pero la huelga de productores de ropa me afectó más de lo pensado. Se agotó el inventario que tenía y mis proveedores se demoran un mes en volverme a enviar mercancía. Las ventas cayeron por completo y ahora no podré pagar la próxima cuota del préstamo."
                            ],
                            question: "¿Qué puedo hacer?"
                        }
                    ],
                    options: [
                        { option: "A", id: '1.1.1' },
                        { option: "B", id: '1.1.2' },
                        { option: "C", id: '1.1.3' }
                    ]
                }
            },
            // 1.1.1 
                {
                    id: "1.1.1",
                    type: "neutral",
                    desc: 'Gloria, no te preocupes. Si dices que en un mes todo se soluciona, puedes dejar de pagar esta cuota y te adelantas en la siguiente. Seguramente ni se dan cuenta.',
                    answer: {
                        pages: [
                            {
                                desc: "Sí se dieron cuenta. Me llamó la gerente del banco a preguntarme si la huelga estaba afectando el negocio y le conté todo. Me dieron tres meses de gracia mientras los proveedores me vuelven a surtir mercancía. Me recordaron que, siempre que vea estas situaciones los llame inmediatamente, que no siempre podrán ellos llamarme a mí. Creo que debo confiar más en los bancos como aliados. "
                            },
                            {
                                desc: [
                                    "3 meses después: ",

                                    "Todo volvió a la normalidad. Los proveedores volvieron a surtirme y la nueva colección está increible. Se vendió todo muy rápido. Me tocó duplicar los pedidos. Con esta subida de ventas tengo muchos excedentes. ¿Cómo debería utilizarlos? "
                                ]
                            }
                        ],
                        options: [
                            { option: 'A', id: "1.1.1.1" },
                            { option: 'B', id: "1.1.1.2" },
                            { option: 'C', id: "1.1.1.3" }
                        ]
                    }
                },  
            // 1.1.2
                {
                    id: "1.1.2",
                    type: "buena",
                    desc: 'Gloria, muchas veces las situaciones se nos salen de control y nunca las preveemos en los análisis y proyecciones. Mi recomendación es que hables con el banco y expliques la situación. Es un imprevisto momentáneo y puedes pedirles ayuda. Lo imporante es ser transparente y verlos como aliados. ',
                    answer: {
                        pages: [
                            {
                                desc: "¡Fue un gran consejo! Cuando llamé al banco y les expliqué la situación, me ayudaron con tres meses de gracia mientras me vuelven a surtir la mercancía. Es muy importante tener a los bancos como aliados en estas situaciones. A ellos les sirve que le vaya bien a la empresa."
                            },
                            {
                                desc: [
                                    "3 meses después: ",

                                    "Todo volvió a la normalidad. Los proveedores volvieron a surtirme y la nueva colección está increible. Se vendió todo muy rápido. Me tocó duplicar los pedidos. Con esta subida de ventas tengo muchos excedentes. ",
                                ],
                                question: '¿Cómo debería utilizarlos?'
                            }
                        ],
                        options: [
                            { option: 'A', id: "1.1.1.1" },
                            { option: 'B', id: "1.1.1.2" },
                            { option: 'C', id: "1.1.1.3" }
                        ]
                    }
                },
                // 1.1.1.1
                    {
                        id: '1.1.1.1',
                        type: 'mala',
                        desc: "¡Para eso hiciste empresa! Si tienes unas proyecciones de pagos, mantenlas y disfruta el resto de tu plata. ",
                        feedback: 'Si tienes excedentes y puedes hacer abonos de capital puedes ahorrar dinero de intereses y mejorar tu calificación financiera.',
                        answer: {
                            pages: [
                                {
                                    desc: "Gloria se fue de viaje con los excedentes. Disfrutó y descansó, pero hubo una baja de ventas que duró un par de meses. Le tocó llamar otra vez al banco y tratar de renegociar las cuotas. Ahora ya sabe cómo distribuir los excedentes de forma equilibrada.  "
                                }
                            ],
                            end: true
                        }
                    },
                // 1.1.1.2
                    {
                        id: '1.1.1.2',
                        type: 'buena',
                        desc: "Es un buen momento para reducir tus costos de intereses. ¿Por qué no empiezas a hacer abonos a capital? También puedes hablar con los proveedores y negociar descuentos por pronto pago. ",
                        answer: {
                            pages: [
                                {
                                    desc: "Con los excedentes Gloria logró disminuir el crédito en un 80%. Ahora las cuotas son mucho más bajas y los intereses también, lo que genera más excedentes mensuales. ¡Gloria está feliz!"
                                }
                            ],
                            end: true
                        }
                    },
                // 1.1.1.3
                    {
                        id: '1.1.1.3',
                        type: 'neutral',
                        desc: "Con el susto que tuvimos hace unos meses, te recomiendo que guardes todos los excedentes en una cuenta de ahorros para que puedas rerponder a las cuotas establecidas en caso de otra crisis.",
                        answer: {
                            pages: [
                                {
                                    desc: "Después de varios meses donde el negocio seguía generando las cuotas del crédito, Gloria se dio cuenta que, al hacer abono a capital, ahorraba más por no pagar intereses tan altos. Ahora Gloria tiene un crédito con cuotas bajas y está más tranquila, lista para seguir creciendo. "
                                }
                            ],
                            end: true
                        }
                    },
            // 1.1.3
                {
                    id: "1.1.3",
                    type: "mala",
                    desc: 'Gloria, tienes que buscar urgentemente alguien que te preste lo de la cuota. Si empiezas a quedar mal puedes poner en riesgo toda la empresa. Ni se te ocurra decirle al banco que hay problemas. ',
                    answer: {
                        pages: [
                            {
                                desc: "Conseguí el dinero prestado a una tasa muy alta. Logré pagar este mes, pero ahora debo pagar dos meses seguidos y no sé si la logre. Debí haber hablado con el banco como primera opción. "
                            }
                        ],
                        end: true
                    }
                },
        // 1.2
            {
                id: '1.2',
                type: "neutral",
                desc: 'Creo que esos $ 100.000.000 COP son suficientes, y ese periodo de gracia ayudaría para que la clientela crezca y se mantenga en el nuevo local. ',
                answer: {
                    pages: [
                        {
                            desc: "Creo que iniciaré con los $60.000.000 y, si necesito más, pido los otros $ 40.000.000 COP."
                        },
                        {
                            desc: [
                                'Unos meses después: ',
                                "Todo iba muy bien, pero la huelga de productores de ropa me afectó más de lo pensado. Se agotó el inventario que tenía y mis proveedores se demoran un mes en volverme a enviar mercancía. Las ventas cayeron por completo y ahora no podré pagar la próxima cuota del préstamo."
                            ],
                            question: "¿Qué puedo hacer?"
                        }
                    ],
                    options: [
                        { option: "A", id: '1.1.1' },
                        { option: "B", id: '1.1.2' },
                        { option: "C", id: '1.1.3' }
                    ]
                }
            },
        // 1.3
            {
                id: '1.3',
                type: "buena",
                desc: 'Si tu plan es de $ 60.000.000 COP, deberíamos mantenerlo.',
                answer: {
                    pages: [
                        {
                            desc: "Tienes razón. Debería mantener el plan inicial y no endeudarme más de la cuenta."
                        },
                        {
                            desc: [
                                'Unos meses después: ',
                                "Todo iba muy bien, pero la huelga de productores de ropa me afectó más de lo pensado. Se agotó el inventario que tenía y mis proveedores se demoran un mes en volverme a enviar mercancía. Las ventas cayeron por completo y ahora no podré pagar la próxima cuota del préstamo."
                            ],
                            question: "¿Qué puedo hacer?"
                        }
                    ],
                    options: [
                        { option: "A", id: '1.1.1' },
                        { option: "B", id: '1.1.2' },
                        { option: "C", id: '1.1.3' }
                    ]
                }
            },
    // 2
        {
            id: "2",
            type: "neutral",
            desc: "Creo que es una gran oportunidad. Has trabajado muy duro en fortalecer el historial financiero de tu negocio y puedes sacarle provecho ahora. Me habías contado que querías hacerle una gran fiesta de quince a tu hija, ¿no? Con el historial del negocio podrías pedir un préstamo a una tasa muy baja y lo vas pagando con lo que genera el negocio. Podrás cumplirle el sueño a tu hija. Llama al banco y revisemos que te ofrecen.",
            answer: {
                pages: [
                    {
                        desc: [
                            "¡Qué emoción! Nunca me había sentido tan organizada y con tanta claridad al hablar con el banco. Les expliqué cómo estaba manejando el negocio, como habían incrementado mis ventas, como tenía organizado mi sistema de registro y cómo proyectaba mis gastos. Al parecer me fue bien. ",
                            "Me preguntaron en qué invertiría el préstamo y les conté sobre el nuevo local que quiero abrir al norte de la ciudad. Van a revisar todos los papeles y me llaman. "
                        ]
                    },
                    {
                        desc: [
                            'Al banco le gustó el plan de crecimiento que les expuse y me están ofreciendo diferentes opciones de crédito. ¿Cuál debería escoger? ',
                            'El plan que expuse, basado en los históricos y en lo aprendido en el curso, fue el siguiente: ',
                            '- Alquiler, adecuación e inventario de un nuevo local por $ 60.000.000 COP',
                            '- Ventas estimadas mensuales después del tercer mes: $ 20.000.000 COP',
                            '- Costos totales: $ 15.000.000 COP'
                        ]
                    },
                    {
                        desc: [
                            "Préstamo de $ 120.000.000 COP",
                            '- Tasa 1,8 % mensual',
                            '- Tiempo 24 meses'
                        ]
                    },
                    {
                        desc: [
                            "Préstamo de $ 100.000.000 COP",
                            '- Tasa 2,2 % mensual',
                            '- Tiempo 24 meses',
                            '- Tres meses de periodo de gracia '
                        ]
                    },
                    {
                        desc: [
                            "Préstamo de $ 60.000.000",
                            "- Tasa 2 %",
                            "- Tiempo 24 meses",
                            "- Tres meses de gracia"
                        ]
                    }
                ],
                options: [
                    { option: 'A', id: '1.1'},
                    { option: 'B', id: '1.2'},
                    { option: 'C', id: '1.3'}
                ]
            }
        },
    // 3
        {
            id: "3",
            type: "mala",
            desc: "Nunca te metas en créditos. Sólo sirven para cobrarte intereses. Si la empresa está bien, ahorra y pagas de contado lo que necesites. No hay necesidad de pagar de más.",
            answer: {
                pages: [
                    {
                        desc: "Nunca te metas en créditos. Sólo sirven para cobrarte intereses. Si la empresa está bien, ahorra y pagas de contado lo que necesites. No hay necesidad de pagar de más. "
                    },
                ],
                answer: {
                    feedback: 'Tienes razón. Mejor sigo como voy. (Gloria perdió la oportunidad de apalancar su negocio y acelerar su crecimiento. Los créditos bien ejecutados son una gran opción para aprovechar oportunidades que se presenten para negociar mejores precios, hacer crecer los puntos de venta, traer maquinaria nueva y muchas más opciones que permitirían reducir costos o incrementar la demanda. ',
                    end: true
                }
            }
        }
    ]
}

export default HistoryGloria;