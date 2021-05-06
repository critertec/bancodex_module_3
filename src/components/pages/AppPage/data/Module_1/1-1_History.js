const HistoryJose = {
    id: "1-1",
    personage: 'jose',
    title: 'history-1',
    cover: 'bg-production-uniform',
    desc: "José tiene un negocio de producción de uniformes. Después de mucho trabajo, recibió una invitación para licitar un proyecto que será indispensable para la sostenibilidad de su emprendimiento. Sin embargo, tiene problemas para saber cuánto debe cobrar. ¿Podrás ayudarlo?",
    ptsMax: 9,
    answer: {
        pages: [
            {
                desc: [
                    "¡Hola!",
                    "     ‎",
                    "Mi nombre es José.",
                    "     ‎",
                    " ",
                    "He seguido el curso de Educación Financiera para MiPymes y estoy listo para aplicar los aprendizajes al mundo real.",
                    "     ‎",
                     ],  
                question: [
                        "¿Podrías ayudarme a resolver unas preguntas para poder ganarme una licitación?",
                        ],

            },
            {
                   desc: [
                    "Te cuento: me invitaron a participar en una licitación para un gran hospital, para producir 1.000 uniformes marcados y elaborados con material antifluidos.",
                "Pero, ¡no sé cuánto cobrar!",
                "     ‎",
            ],
            question: "¿Qué debería hacer?"
        }
    ],
    options: [
        { option: "A", id: "1.1"},
        { option: "B", id: "1.2"},
        { option: "C", id: "1.3"}
    ],
    
},
    listOptions: [
// 1
        {
            id: '1',
            type: 'neutral',
            desc: [
                    "¡Claro! En lo que pueda ayudarte cuenta conmigo.",
                    "     ‎",
                    "Es importante que sepas que cada historia tiene sus particularidades y que las respuestas que te daré se basan en la información que me proveas. Cualquier cambio en la información podría variar la respuesta.",
                ],
            answer: {
                pages: [
                    {
                        desc: [
                            "Perfecto. ¡Muchas gracias!",
                            "     ‎",
                            "",
                            "Te cuento: me invitaron a participar en una licitación para un gran hospital, para producir 1.000 uniformes marcados y elaborados con material antifluidos.",
                            "Pero, ¡no sé cuánto cobrar!",
                            "     ‎",
                        ],
                        question: "¿Qué debería hacer?"
                    }
                ],
                options: [
                    { option: "A", id: "1.1"},
                    { option: "B", id: "1.2"},
                    { option: "C", id: "1.3"}
                ]
            }
        },
        // 1.1
            {
                id: '1.1',
                type: "neutral",
                desc: "Revisando en internet veo que el precio promedio de uniformes similares está entre  $100.000 y  $150.000 cuando se compra por unidad. Podrías cobrar  $125.000.",
                feedback: [
                        "¡Ten cuidado!",
                        "    ‎",
                        "Si bien es importante analizar el mercado, si determinas un precio solo con factores externos es posible que vendas por debajo de los costos, lo que podría llevarte a dar pérdida.",
                        "    ‎",
                        "También podrías basarte en un precio alto que no tiene en cuenta los costos menores de producción masiva, lo que te haría menos competitivo en precio.",
                        ],
                answer: {
                    pages: [
                        {
                            desc: [
                                    "Me voy a arriesgar poniendo ese valor.",
                                    "    ‎",
                                    "Espero que no estemos cobrando demasiado, porque están comprando por cantidad.",
                            ],
                        }
                    ],
                    answer: {
                        pages: [
                            {
                                desc: [
                                    "Estábamos por encima del precio de los competidores.",
                                    "Perdimos esta oportunidad por no hacer bien el costeo y la fijación del precio.",
                                    "    ‎",
                                    "Será en una próxima oportunidad.",
                                ]
                            }
                        ],
                        end: true
                    }
                }
            },
        // 1.2
            {
                id: '1.2',
                type: 'buena',
                desc: "¿Me podrías compartir el listado de costos?",
                feedback: [
                    "¡Muy bien!",
                    "    ‎",
                    "Cada negocio tiene sus particularidades, por eso es importante revisar cuánto nos cuesta producir un bien para fijar su precio, sin olvidar que se debe agregar una utilidad.",
                ],
                    answer: {
                    pages: [
                        {
                            table: {
                                title: "¡Claro! Necesitamos producir todo a más tardar en un mes",
                                columns: [
                                    { key: 'description', label: 'descripción' },
                                    { key: 'value', label: 'valor' }
                                ],
                                values: [
                                    {
                                        description: 'Telas',
                                        value: ' $1.000.000 para 100 unidades'                     
                                    },
                                    {
                                        description: 'Botones',
                                        value: ' $150.000 para 100 unidades'                     
                                    },
                                    {
                                        description: 'Mano de obra',
                                        value: ' $6.000.000 para 1.000 unidades'                     
                                    },
                                    {
                                        description: 'Alquiler de máquinas',
                                        value: ' $9.000.000 para 1.000 unidades'                     
                                    },
                                    {
                                        description: 'Mercado de mi familia',
                                        value: ' $500.000 mensuales'                     
                                    },
                                    {
                                        description: 'Servicios',
                                        value: ' $1.100.000 mensuales'                     
                                    },
                                    {
                                        description: 'Arriendo',
                                        value: ' $2.000.000 mensuales'                     
                                    },
                                    {
                                        description: 'Transporte',
                                        value: ' $100.000 '                     
                                    },
                                    {
                                        description: 'Elementos varios de producción',
                                        value: ' $1.000.000 para 1.000 unidades'                     
                                    }
                                ]   
                            }                                    
                        }
                    ],
                    options: [
                        { option: "A", id: "1.2.1"},
                        { option: "B", id: "1.2.2"},
                        { option: "C", id: "1.2.3"}
                    ]                
                }
            },
            // 1.2.1
                {
                    id: '1.2.1',
                    type: "mala",
                    desc: "Podrías cobrar $30.750 por uniforme, ya que te compran por volumen.",
                    feedback: [
                            "Llegaste a este valor sumando los costos directos e indirectos, sin embargo, no tuviste en cuenta la utilidad esperada.", 
                            "    ‎",
                            "Si no tienes en cuenta la utilidad en tu fijación de precio nunca podrás hacer crecer tu negocio ni tener disponibilidad para responder a imprevistos.",
                    ],
                    answer: {
                        pages: [
                            {
                                desc: "Me puse a hacer el ejercicio de costeo con calma y definitivamente no puedo cobrar  $30.750, eso es lo que me cuesta producirlo. Voy a agregarle un 45% de utilidad."
                            },
                            {
                                desc: [
                                    "¡Ganamos la licitación! Muchas gracias por tu ayuda.",
                                    "    ‎",
                                    "Y fue justo a tiempo. Me acaban de pagar el anticipo y necesito esa plata para pagar los servicios de mi casa que me los iban a cortar.",
                                    "    ‎",
                                    "¿Está bien hacer eso?",
                                ],
                            }
                        ],
                        options: [
                            { option: 'A', id: "1.2.1.1"},
                            { option: 'B', id: "1.2.1.2"},
                            { option: 'C', id: "1.2.1.3"}
                        ]
                    }
                },
                // 1.2.1.1
                    {
                        id: '1.2.1.1',
                        type: "neutral",
                        desc: "¡Claro! Págalo como si fuera utilidad adelantada. Esa plata es tuya y debe servirte para vivir bien. ",
                        feedback: [
                            "Al elegir utilizar el dinero de los anticipos para gastos personales o para otros proyectos puedes desorganizar las finanzas y no podrás identificar si el negocio realmente fue rentable o no.",
                            "    ‎",
                            "Recuerda siempre anotar y usar el dinero exclusivamente para la operación de tu negocio, a menos que sea una emergencia, para lo cual debes tener una utilidad lo suficientemente alta para no afectar tus cuentas.",
                        ],
                        answer: {
                            pages: [
                                {
                                    desc: [
                                        "Era una emergencia y tenía que hacerlo.", 
                                        "    ‎",
                                        "Menos mal había cotizado el proyecto con suficiente utilidad y no hubo imprevistos.",
                                        "¡Evitaré repetirlo!",
                                        
                                    ]
                                }
                            ],
                            answer: {
                                pages: [
                                    {
                                        desc: [
                                            "Gracias a tu ayuda, José logró sacar adelante su primer negocio grande de forma rentable y ya sabe cómo cotizar para futuras oportunidades.",
                                            "    ‎",
                                            "Definitivamente, saber cuáles son los costos directos e indirectos y tener en cuenta el margen de utilidad que espero ganar, es fundamental para fijar los precios y tener negocios en crecimiento.",
                                        ],
                                    }
                                ],
                                end: true
                            }
                        }
                    },
                // 1.2.1.2
                    {
                        id: '1.2.1.2',
                        type: "buena",
                        desc: [
                            "Podrías utilizar el anticipo y anotar en tus cuentas del negocio para qué lo utilizaste.",
                            " Apenas recibas tu sueldo, lo devuelves para no afectar el proyecto.",
                        ],
                        feedback: [
                                    "¡Muy bien!",
                                    "    ‎",
                                    "Sabes que no es bueno utilizar el dinero que necesitas para mantener la continuidad del negocio en gastos personales y que es mejor esperar a recibir tu sueldo para ajustar el presupuesto personal.",
                                    "    ‎",
                                    "Sin embargo, en situaciones de emergencia puedes disponer del dinero dejando todo anotado y devolviéndolo cuando sea posible.",
                                    "    ‎",
                                    "Así podrás evaluar la rentabilidad del proyecto y determinar si es bueno o no replicarlo en el futuro.",
                                    ],
                        answer: {
                            pages: [
                                {
                                    desc: "Listo. Logré solucionar lo de los servicios. Ya puedo dedicarme a pensar en nuevos proyectos con lo que he aprendido."
                                }
                            ],
                            answer: {
                                pages: [
                                    {
                                        desc: [
                                            "Gracias a tu ayuda, José logró sacar adelante su primer negocio grande de forma rentable y ya sabe cómo cotizar para futuras oportunidades.",
                                            "    ‎",
                                            "Definitivamente, saber cuáles son los costos directos e indirectos y tener en cuenta el margen de utilidad que espero ganar, es fundamental para fijar los precios y tener negocios en crecimiento.",
                                        ],
                                    }
                                ],
                                end: true
                            }
                        }
                    },
                // 1.2.1.3
                    {
                        id: '1.2.1.3',
                        type: "neutral",
                        desc: "No. Pide prestado por otro lado, pero no cruces cuentas personales con las del trabajo.",
                        feedback: [
                                    "¡No tienes que pedir prestado por otro lado!",
                                    "    ‎",
                                    "Puedes auto prestarte teniendo presente que debes reponer rápidamente ese dinero para mantener la continuidad del negocio y para que no se olvide, déjalo anotado.",
                                    "    ‎",
                                    "Por otro lado, recuerda que las utilidades de un negocio deben servir para cubrir emergencias y gastos personales.",
                                 ],

                        answer: {
                            pages: [
                                {
                                    desc: "Increíble que haya ganado el contrato más grande de mi empresa y no pueda pagar los servicios. Debo seguir trabajando fuertemente para que no vuelva a pasar."
                                }
                            ],
                            end: true
                        }
                    },
            // 1.2.2
                {
                    id: '1.2.2',
                    type: "buena",
                    desc: "Podrías cobrar $60.000 por uniforme.",
                    feedback: [
                                "¡Muy bien!",
                                "    ‎",
                                "Al identificar los costos directos e indirectos puedes saber que un uniforme te cuesta $30.750 y que a esto debes sumarle la utilidad esperada.",
                                "    ‎",
                                "La utilidad debe ser tan alta que te permita crecer y responder a imprevistos, pero no tanto para que tus precios sigan siendo competitivos.",
                                "    ‎",
                                "Ten presente que la ganancia la fijas tu, no hay una regla que diga qué porcentaje debería ser.",
                            ],
                    answer: {
                        pages: [
                            {
                                desc: [
                                    "Creo que $60.000 es un buen precio. Me deja utilidad y sigue siendo competitivo frente a los precios de mercado.", 
                                    "    ‎",
                                    "¡Así lo haré!",
                                ],
                            },
                            {
                                desc: [
                                    "¡Ganamos la licitación! Muchas gracias por tu ayuda.",
                                    "    ‎",
                                    "Y fue justo a tiempo. Me acaban de pagar el anticipo y necesito esa plata para pagar los servicios de mi casa que me los iban a cortar.",
                                    "    ‎",
                                    "¿Está bien hacer eso?",
                                ],
                            }
                        ],
                        options: [
                            { option: 'A', id: "1.2.1.1"},
                            { option: 'B', id: "1.2.1.2"},
                            { option: 'C', id: "1.2.1.3"}
                        ]
                    }
                },
            // 1.2.3
                {
                    id: '1.2.3',
                    type: "mala",
                    desc: "Cobra $125.000, que es el precio que pagarían si lo compran en un supermercado.",
                    feedback: [
                                "¡Ten cuidado!",
                                "    ‎",
                                "Elegiste cobrar 4 veces el valor del producto. Si bien no existe una fórmula exacta para determinar la utilidad esperada, si debemos buscar ser competitivos, ya sea en el precio o en el valor agregado que ofreces con tus productos o servicios.",
                            ],
                        answer: {
                        pages: [
                            {
                                desc: "Estábamos por encima del precio de los competidores. Perdimos esta oportunidad por no hacer bien el costeo y la fijación del precio. Será en una próxima oportunidad."
                            }
                        ],
                        end: true
                    }
                },
        // 1.3
            {
                id: "1.3",
                type: 'mala',
                desc: "Si quieres ganarte el negocio, pregúntale al cliente los valores máximos que están estimando recibir y cotiza sobre esa información.  ",
                feedback: [
                            "Saber cuánto es lo máximo que está dispuesto a pagar el cliente es útil, pero es más importante saber cuánto te cuesta producir un bien para fijar un precio que incluya una ganancia.",
                            "    ‎",
                            "De esta manera, aseguras que no estás vendiendo por debajo de los costos de producción, ni muy por encima perdiendo competitividad.",
                        ],

                answer: {
                    pages: [
                        {
                            desc: "Me dice que lo más bajo posible, manteniendo la calidad. No me ayudó mucho."
                        }
                    ],
                    options: [
                        { option: 'A', id: "1.2"}
                    ]
                }
            },
// 2
        {
            id: '2',
            type: "mala",
            desc: "No. En este momento estoy ocupado.",
            answer: {
                pages: [
                    {
                        desc: [
                            "Es una pena.",
                            "    ‎",
                            "Haber ayudado a José te habría permitido abordar mejor los temas de costos, fijación de precio y separación de cuentas.",
                        ],
                        question: "¡Vuelve a intentarlo!"
                    }
                ],
                end: true
            }
        },
    ]
}

export default HistoryJose;