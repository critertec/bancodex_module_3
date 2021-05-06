const HistoryJose = {
    id: "2-1",
    personage: 'jose',
    title: 'history 1',
    cover: 'bg-production-uniform',
    desc: "Después de haber ganado la licitación con la que José creó su empresa, ha trabajado fuertemente y se ha posicionado en la ciudad por su calidad y servicio. Distribuye a algunos hospitales, colegios y fábricas del sector. “Uniformes Geniales S.A.S” ha tenido un crecimiento durante el último año y, por primera vez desde su constitución, ha dejado utilidades de $20.000.000. Después de haber escuchado a Karem, José sabe que existen diferentes formas para aprovechar estos excedentes de forma responsable y está buscando consejos para hacerlo bien.",
    ptsMax: 12,
    answer: {
        pages: [
            {
                desc: [
                    "¡Hola!",
                    "     ‎",
                    "Después de tanto trabajo, por fin logré tener utilidades. Trabajé como nunca, pero lo he logrado.",
                ],
                question: "¿Qué debería hacer con estos $20.000.000 que tengo guardados?"
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
        type: "mala",
        desc: [
            "¿Has considerado que después de tanto trabajar deberías tomar unas vacaciones? ",
            "Con esa plata podrías llevar a tu familia a Europa. ¡Te lo mereces! ",
            "Para mejorar la productividad es importante el descanso",
        ],
        feedback: [
                    "¡No tan rápido!",
                    "     ‎",
                    "Si bien es cierto que después de tanto trabajar, descansar y disfrutar los rendimientos del negocio puede ser una buena opción, es importante analizar cuáles son tus metas a corto y mediano plazo y tratar que las decisiones que tomes te acerquen a ellas.",
                    "     ‎",
                    "Para alcanzar la sostenibilidad de tu empresa y tranquilidad en tu vida, deberías pensar en invertir y no en gastar. Al menos una parte considerable.",
        ],
        answer: {
            pages: [
                {
                    desc: [
                        "Siempre he querido viajar y conocer.",
                        "     ‎",
                        "Pero no puedo asegurar que este año sea tan bueno como el anterior. Quisiera estar tranquilo y tener la plata disponible.",
                        "Prefiero empezar a crear mi fondo de emergencia.",
                        "     ‎",
                    ],

                    question: "¿Qué debería hacer primero?"
                }
            ],
            options: [
                { option: "A", id: "1.1" },
                { option: "B", id: "1.2" }
            ]
        }
    },
    // 1.1
        {
            id: "1.1",
            type: "buena",
            desc: "¿Por qué no vas al banco a ver qué opciones te ofrecen que te de rentabilidad y seguridad? ",
            feedback: "Los costos bancarios son mínimos a comparación de la tranquilidad, seguridad y disponibilidad que te genera tener el dinero en entidades financieras.",
            answer: {
                pages: [
                    {
                        desc: [
                                "Me da miedo ir al banco y que me ofrezcan cosas que no necesito.",
                                "     ‎",
                        ],
                        question: "¿Por que tipo de producto debería preguntar?"
                    }
                ],
                options: [
                    { option: "A", id: "1.1.1" },
                    { option: "B", id: "1.1.2" }
                ]
            }
        },
        // 1.1.1
            {
                id: "1.1.1",
                type: "buena",
                desc: "Podrías abrir un CDT para que te generen intereses, y así esos $20.000.000 sean mucho más en un año.",
                feedback: [
                            "¡Muy bien!",
                            "    ‎",
                            "Normalmente los CDT ofrecen rendimientos más altos que las cuentas de ahorro. Además, te evitan la tentación de retirar el dinero antes del plazo fijado, pues si lo haces, te cobran una penalidad.",
                        ],
                    answer: {
                    pages: [
                        {
                            desc: [
                                "Fui al banco y abrí un CDT.",
                                "     ‎",
                                "Me asesoraron y me informaron que es una buena opción para que mi dinero no pierda valor en el tiempo y, al mismo tiempo, mantener mis ahorros lejos de la tentación de retirarlos.",
                                "     ‎",
                                "Me ofrecieron varias opciones: un mes, tres meses, seis meses o un año.",
                                "     ‎",
                                "Escogí la opción de seis meses, porque es posible que requiera ese dinero para un pedido grande en esas fechas.",
                            ],
                            },
                        {
                            desc: [
                                "¡Me siento genial!",
                                "     ‎",
                                "Estoy tranquilo con mis ahorros en el CDT, seguros y creciendo.",
                                "     ‎",
                                "Pero, antes de irme del banco, me ofrecieron unos seguros para el negocio y no sé cuál debería elegir. "
                            ],
                        },
                        {
                            table: {
                                title: [
                                        'Estas fueron las opciones:',
                                        "    ‎",
                                        ],
    
                                columns: [
                                    { key: 'description', label: 'Cobertura' },
                                    { key: 'value', label: 'Valor anual' }
                                ],
                                values: [
                                    {
                                       description: "Cobertura básica: Incendios o rayos, explosión, inundación.",
                                       value: '$500.000'
                                    },
                                    {
                                        description: 'Cobertura básica + cobertura adicional de robo.',
                                        value: '$700.000'
                                    },
                                    {
                                        description: 'Cobertura básica + cobertura robo + cobertura para desastres naturales como tsunami y volcán',
                                        value: '$950.000'
                                    },
                                   
                                         ],
                            }
                                
                         
                                    
                        }
                    ],
                    
                    options: [
                        { option: "A", id: "1.1.1.1" },
                        { option: "B", id: "1.1.1.2" },
                        { option: "C", id: "1.1.1.3" },
                        { option: "D", id: "1.1.1.4" }
                    ],
                }
            },
            // 1.1.1.1
                {
                    id: "1.1.1.1",
                    type: "neutral",
                    desc: "Deberías irte por el seguro más económico. Para el banco es importante que te asegures, pero no inviertas mucho en eso.",
                    feedback: "El costo no es el único factor que debes analizar antes de adquirir un seguro. Revisa los riesgos a los cuales te expones y tu capacidad de pago, así escogerás sabiamente la mejor decisión.",
                    answer: {
                        pages: [
                            {
                                desc: [
                                    "¡Muchas gracias!",
                                    "    ‎", 
                                    "Voy a pensar bien que seguro tomar."
                                ],
                            }
                        ],
                        answer: {
                            feedback: "Gracias a tus consejos, José ha logrado ahorrar lo suficiente para abrir su nuevo centro de producción. Sin embargo, unos meses después de haber comprado el seguro de cobertura básica, los ladrones entraron a la fábrica y se llevaron 5 millones en mercancía. José ahora sabe que elegir bien el seguro es fundamental para evitar alejarse de la meta financiera. ",
                            end: true
                        }
                    }
                },
            // 1.1.1.2
                {
                    id: "1.1.1.2",
                    type: "buena",
                    desc: "Debes asegurarte contra los riesgos que puedan complicar la continuidad de tu negocio en caso que ocurran. Te recomiendo que también te asegures contra el robo. ",
                    feedback: [
                                "¡Muy bien!",
                                "    ‎",
                                "Un seguro es una forma de ahorrar, ya que al ocurrir un evento inesperado cubierto en la póliza, evitarás descuadrar tu flujo de caja.",
                                "    ‎",
                                "¡No olvides! Siempre compara al menos dos productos antes de tomar una decisión, es posible que encuentres otro seguro más económico por las mismas coberturas.",
                            ],        
                        answer: {
                        pages: [
                            {
                                desc: "¡Genial! Así lo haré. Muchas gracias por tus consejos. "
                            }
                        ],
                        answer: {
                            feedback: "Gracias a tus consejos, José ha logrado ahorrar lo suficiente para abrir su nuevo centro de producción. Unos meses después de haber comprado el seguro, hubo una inundación que dañó su maquinaria de producción pero, al estar asegurado, pudo conseguir una máquina nueva que funciona mucho mejor que la que tenía antes. ",
                            end: true
                        }
                    }
                },
            // 1.1.1.3
                {
                    id: "1.1.1.3",
                    type: "neutral",
                    desc: "Deberías irte por el seguro más grande. Mejor prevenir que lamentar. Uno nunca sabe qué pueda pasar.",
                    feedback: [
                            "¡Ten presente!",
                            "    ‎",
                            "Antes de adquirir un seguro se deben analizar los riesgos a los cuales se está expuesto y la capacidad de pago. Además se deben comparar opciones para comprar el mejor producto al menos costo.",
                            ],
                    answer: {
                        pages: [
                            {
                                desc: "Muchas gracias. Voy a hacerlo tal y como dices. "
                            }
                        ],
                        answer: {
                            feedback: "Gracias a tus consejos, José ha logrado ahorrar lo suficiente para abrir su nuevo centro de producción. Sin embargo, después de varios meses cayó en cuenta que en la ciudad donde vive no hay volcanes y está lejos del mar. No necesita asegurarse por esos desastres, así que podría ahorrar más dinero. ",
                            end: true
                        }
                    }
                },
            // 1.1.1.4
                {
                    id: "1.1.1.4",
                    type: "mala",
                    desc: "No te gastes tus utilidades en seguros. Son gastos innecesarios que te alejan de tu meta. ",
                    answer: {
                        pages: [
                            {
                                desc: [
                                        "Después de unos meses hubo una inundación y se dañó una de las máquinas de producción que vale $20.000.000.",
                                        "    ‎",
                                        "Me hubiera salido más barato comprar el seguro. No vuelvo a arriesgar mi negocio así.",
                                ],
                            }
                        ],
                        end: true
                    }
                },
        // 1.1.2
            {
                id: "1.1.2",
                type: "neutral",
                desc: "Podrías abrir una cuenta de ahorros y depositar el dinero ahí. Así, si quieres gastarlo tienes acceso a él y estará segura tu plata en el banco.",
                feedback: "Todo depende de tus objetivos a corto, mediano y largo plazo, y de la disponibilidad del efectivo que requieras para cumplir tus metas. Si puedes esperar y no requieres la disponibilidad inmediata hay intrumentos financieros que te permitirán recibir rendimientos más altos que la cuenta de ahorros. Si requieres tener una disponibilidad de fondo de emergencias, imprevistos u oportunidades, la cuenta de ahorro es una buena opción.",
                answer: {
                    pages: [
                        {
                            desc: "Fui al banco y decidí abrir una cuenta de ahorros. Me asesoraron y me informaron que es una buena opción para crear historial financiero, y quizás en un futuro me sea útil para pedir un préstamo para el negocio. La ventaja de la cuenta de ahorros es que en cualquier momento puedo retirar el dinero a través de un cajero, puedo hacer compras con la tarjeta debito o incluso puedo hacer transferencias a través de internet.  Eso sí, la clave es utilizar ese dinero únicamente para los gastos que realmente requiera el negocio. "
                        },
                        {
                            desc: "Antes de irme, me recomendaron tener un seguro para mi negocio y no sé cuál elegir."
                        },
                        {
                            table: {
                                title: [
                                        'Estas fueron las opciones:',
                                        "    ‎",
                                        ],
    
                                        columns: [
                                            { key: 'description', label: 'Cobertura' },
                                            { key: 'value', label: 'Valor anual' }
                                        ],
                                        values: [
                                            {
                                               description: "Cobertura básica: Incendios o rayos, explosión, inundación.",
                                               value: '$500.000'
                                            },
                                            {
                                                description: 'Cobertura básica + cobertura adicional de robo.',
                                                value: '$700.000'
                                            },
                                            {
                                                description: 'Cobertura básica + cobertura robo + cobertura para desastres naturales como tsunami y volcán',
                                                value: '$950.000'
                                            },
                                   
                                         ],
                            }
                                
                         
                                    
                        }
                    ],
                    options: [
                        { option: "A", id: "1.1.1.1" },
                        { option: "B", id: "1.1.1.2" },
                        { option: "C", id: "1.1.1.3" },
                        { option: "D", id: "1.1.1.4" }
                    ]
                }
            },
    // 1.2
    {
        id: "1.2",
        type: "mala",
        desc: "Creo que lo mejor es tener la plata donde tengas acceso inmediato. Ahorrar también es no gastar en cosas que puedes ahorrarte, como los servicios bancarios. ",
        feedback: [
            "Cuando guardas dinero en escondites o cajas fuertes, te expones a que te lo roben o a que lo gastes en cualquier momento.",
            "    ‎",
            "Tener guardado el dinero en una entidad financiera te brinda tranquilidad, esto no se compara con los costos bancarios que de pronto tendrías que asumir.",
            "    ‎",
            "Otra opción es buscar un producto financiero que te ofrezca rendimientos, así tu ahorro sería mayor.",
        ],
        answer: {
            pages: [
                {
                    desc: [
                            "¡Gracias por tu consejo!",
                            "    ‎",
                            "Me acabo de acordar de lo que le pasó a mi primo Luis. Él tenía bastante dinero ahorrado en efectivo, pero se entraron los ladrones a la casa y se lo llevaron todo. No había a quien reclamarle. Creo que mejor lo guardaré en el banco.",
                    ],
                },
                {
                    desc: "Fui al banco y ya abrí la cuenta. Pero antes de irme, me recomendaron tener un seguro para mi negocio y no sé cuál elegir.",
                },
                {
                    table: {
                        title: [
                                'Estas fueron las opciones:',
                                "    ‎",
                                ],

                        columns: [
                            { key: 'description', label: 'Cobertura' },
                            { key: 'value', label: 'Valor Anual' }
                        ],
                        values: [
                            {
                               description: "Cobertura básica: Incendios o rayos, explosión, inundación.",
                               value: '$500.000'
                            },
                            {
                                description: 'Cobertura básica + cobertura adicional de robo.',
                                value: '$700.000'
                            },
                            {
                                description: 'Cobertura básica + cobertura robo + Cobertura desastres naturales (tsunami, volcán)',
                                value: '$950.000'
                            },
                           
                                 ],
                    }
                        
                 
                            
                }
            ],
            options: [
                { option: "A", id: "1.1.1.1" },
                { option: "B", id: "1.1.1.2" },
                { option: "C", id: "1.1.1.3" },
                { option: "D", id: "1.1.1.4" }
            ]
        }
    },
// 2
    {
        id: "2",
        type: "neutral",
        desc: "Guarda el dinero en algún lado donde no puedas gastártelo. Uno nunca se da cuenta, pero tenerlo disponible es un gran riesgo.",
        feedback: [
                    "Está muy bien que no te quieras gastar de inmediato ese dinero.",
                    "    ‎",
                    "Una forma de ayudarte a saber qué hacer con el, es fijar metas a corto, mediano y largo plazo.",
                    "    ‎",
                    "Por otra parte, recuerda, cuando guardas dinero sin obtener de vuelta un rendimiento, este puede perder su valor en el tiempo.",
                ],   
        answer: {
            pages: [
                {
                    desc: "No quiero gastarlo y perderlo. Pero quisiera poder tener disponibilidad para cualquier emergencia u oportunidad que aparezca.",
                    question: "¿Qué debería hacer?"
                }
            ],
            options: [
                { option: "A", id: "1.1" },
                { option: "B", id: "1.2" }
            ]
        }
    },
// 3
    {
        id: "3",
        type: "buena",
        desc: "¿No tienes algún plan para ese dinero? ¿Algo que haga que el negocio crezca y puedas ganar más en el futuro? ",
        feedback: [
                    "¡Muy bien!",
                    "     ‎",
                    "Si tienes excedentes de efectivo puedes iniciar nuevos planes para crecer. Puedes negociar con tus proveedores pagos anticipados, mejorar tu infraestrctura o puedes guardarla para cuando tengas una oportunidad.",
                ],

        answer: {
            pages: [
                {
                    desc: [
                            "Últimamente me han pedido más uniformes de los que somos capaces de producir.",
                            "     ‎",
                            "Una máquina nueva me puede costar hasta $40.000.000. En 6 meses recibiré otros $20.000.000 de un pedido que se demoró en pagar.",
                            "Eso podría invertirlo en la maquinaria nueva.",
                        ],
                    question: "¿Qué opinas?"
                }
            ],
            options: [
                { option: "A", id: "3.1" },
                { option: "B", id: "3.2" },
                { option: "C", id: "3.3" }
            ]
        }
    },
    // 3.1
        {
            id: "3.1",
            type: "neutral",
            desc: "Podrías abrir una cuenta de ahorros y depositar el dinero ahí. Así, mientras te llega el dinero para completar lo de la máquina, tienes acceso a él. ¡Pero no te la gastes!",
            feedback: [
                "Siempre es mejor guardar el dinero en una cuenta de ahorros que debajo del colchón, al menos así no te expones a que te lo roben, pero ¿no habría sido mejor un producto que te ofreciera rendimientos?",
                    ],
            answer: {
                pages: [
                    {
                        desc: [
                                "Fui al banco y decidí abrir una cuenta de ahorros.",
                                "    ‎",
                                "Me asesoraron y me informaron que es una buena opción para crear historial financiero, y quizás en un futuro me sea útil para pedir un préstamo para el negocio.",
                                "    ‎",
                                "La ventaja de la cuenta de ahorros es que en cualquier momento puedo retirar el dinero a través de un cajero, puedo hacer compras con la tarjeta debito o incluso puedo hacer transferencias a través de internet."
                        ],
                    },
                    {
                        desc: "Antes de irme, me recomendaron tener un seguro para mi negocio y no sé cuál elegir."
                    },
                    {
                        table: {
                            title: [
                                    'Estas fueron las opciones:',
                                    "    ‎",
                                    ],

                            columns: [
                                { key: 'description', label: 'Cobertura' },
                                { key: 'value', label: 'Valor Anual' }
                            ],
                            values: [
                                {
                                   description: "Cobertura básica: Incendios o rayos, explosión, inundación.",
                                   value: '$500.000'
                                },
                                {
                                    description: 'Cobertura básica + cobertura adicional de robo.',
                                    value: '$700.000'
                                },
                                {
                                    description: 'Cobertura básica + cobertura robo + Cobertura desastres naturales (tsunami, volcán)',
                                    value: '$950.000'
                                },
                               
                                     ],
                        }
                            
                     
                                
                    }
                ],
                options: [
                    { option: "A", id: "1.1.1.1" },
                    { option: "B", id: "1.1.1.2" },
                    { option: "C", id: "1.1.1.3" },
                    { option: "D", id: "1.1.1.4" }
                ]
            }
        },
        // 3.2
            {
                id: "3.2",
                type: "buena",
                desc: "Si quieres ahorrar y comprar esa máquina, podrías meter el dinero en un CDT y cuando tengas la plata completa compras la máquina.",
                feedback: [
                            "¡Muy bien!",
                            "    ‎",
                            "Normalmente los CDT ofrecen rendimientos más altos que las cuentas de ahorro. Además, te evitan la tentación de retirar el dinero antes del plazo fijado, pues si lo haces, te cobran una penalidad.",
                        ],
                    answer: {
                    pages: [
                        {
                            desc: "Eso del CDT suena muy interesante. Hay muchas opciones.",
                            question: "¿Cuál debería elegir?"
                        }
                    ],
                    options: [
                        { option: "A", id: "3.2.1" },
                        { option: "B", id: "3.2.2" },
                        { option: "C", id: "3.2.3" }
                    ]
                }
            },
            // 3.2.1
                {
                    id: "3.2.1",
                    type: "mala",
                    desc: "1. CDT 12 meses 4% E.A ",
                    feedback: "Si tu objetivo es comprar una nueva máquina en 6 meses, pedir un CDT a 12 meses no te daría la disponibilidad para cumplir tus objetivos.",
                    answer: {
                        pages: [
                            {
                                desc: [ 
                                "Es una buena opción para que mi dinero no pierda valor en el tiempo y, al mismo tiempo, mantener mis ahorros lejos de la tentación de retirarlos.",
                                "Aunque la tasa es más alta, necesito el dinero dentro de 6 meses.",
                                "    ‎",
                                "Creo que cambiaré de opción y tomaré el CDT a 6 meses con el 3.5% EA."
                                ],
                            },
                            {
                                desc: [
                                    "¡Me siento genial!",
                                    "     ‎",
                                    "Estoy tranquilo con mis ahorros en el CDT, seguros y creciendo.",
                                    "     ‎",
                                    "Pero, antes de irme del banco, me ofrecieron unos seguros para el negocio y no sé cuál debería elegir. "
                                ],
                            },
                            {
                                table: {
                                    title: [
                                            'Estas fueron las opciones:',
                                            "    ‎",
                                            ],
        
                                    columns: [
                                        { key: 'description', label: 'Cobertura' },
                                        { key: 'value', label: 'Valor Anual' }
                                    ],
                                    values: [
                                        {
                                           description: "Cobertura básica: Incendios o rayos, explosión, inundación.",
                                           value: '$500.000'
                                        },
                                        {
                                            description: 'Cobertura básica + cobertura adicional de robo.',
                                            value: '$700.000'
                                        },
                                        {
                                            description: 'Cobertura básica + cobertura robo + Cobertura desastres naturales (tsunami, volcán)',
                                            value: '$950.000'
                                        },
                                       
                                             ],
                                }
                                    
                             
                                        
                            }
                        ],
                        options: [
                            { option: "A", id: "1.1.1.1" },
                            { option: "B", id: "1.1.1.2" },
                            { option: "C", id: "1.1.1.3" },
                            { option: "D", id: "1.1.1.4" }
                        ]
                    }
                },
            // 3.2.2
                {
                    id: "3.2.2",
                    type: "neutral",
                    desc: "2. CDAT 20 días 1,8% E.A",
                    feedback: [
                            "Si tu objetivo es comprar una máquina en 6 meses, tener un CDAT en un plazo de 20 días hará que al terminar ese tiempo debas buscar una nueva forma de invertir tu dinero.",
                            "    ‎",
                            "Además, no estarías aprovechando la mejor tasa que te ofrece el mercado.",
                            ],
                    answer: {
                        pages: [
                            {
                                desc: [
                                        "Creo que puedo extender el plazo.",
                                        "    ‎",
                                        "Necesito el dinero hasta dentro de seis meses y la opción del CDT a seis meses ofrece mejor rentabilidad.",
                                ],
                            },
                            {
                                desc: [
                                    "¡Me siento genial!",
                                    "     ‎",
                                    "Estoy tranquilo con mis ahorros en el CDT, seguros y creciendo.",
                                    "     ‎",
                                    "Pero, antes de irme del banco, me ofrecieron unos seguros para el negocio y no sé cuál debería elegir. "
                                ],
                            },
                            {
                                table: {
                                    title: [
                                            'Estas fueron las opciones:',
                                            "    ‎",
                                            ],
        
                                    columns: [
                                        { key: 'description', label: 'Cobertura' },
                                        { key: 'value', label: 'Valor Anual' }
                                    ],
                                    values: [
                                        {
                                           description: "Cobertura básica: Incendios o rayos, explosión, inundación.",
                                           value: '$500.000'
                                        },
                                        {
                                            description: 'Cobertura básica + cobertura adicional de robo.',
                                            value: '$700.000'
                                        },
                                        {
                                            description: 'Cobertura básica + cobertura robo + Cobertura desastres naturales (tsunami, volcán)',
                                            value: '$950.000'
                                        },
                                       
                                             ],
                                }
                                    
                             
                                        
                            }
                        ],
                        options: [
                            { option: "A", id: "1.1.1.1" },
                            { option: "B", id: "1.1.1.2" },
                            { option: "C", id: "1.1.1.3" },
                            { option: "D", id: "1.1.1.4" }
                        ]
                    }
                },
            // 3.2.3
                {
                    id: "3.2.3",
                    type: "buena",
                    desc: "3.CDT 6 meses al 3,5% E.A",
                    feedback: "Sincronizar los plazos de los CDTs con tus objetivos y metas te permite optimizar los rendimientos. ¡Bien hecho!",
                    answer: {
                        pages: [
                            {
                                desc: "¡Perfecto! Estaba pensando en eso mismo. Puedo ahorrar y dentro de 6 meses, que necesite el dinero, lo saco. "
                            },
                            {
                                desc: [
                                    "¡Me siento genial!",
                                    "     ‎",
                                    "Estoy tranquilo con mis ahorros en el CDT, seguros y creciendo.",
                                    "     ‎",
                                    "Pero, antes de irme del banco, me ofrecieron unos seguros para el negocio y no sé cuál debería elegir. "
                                ],
                            },
                            {
                                table: {
                                    title: [
                                            'Estas fueron las opciones:',
                                            "    ‎",
                                            ],
        
                                    columns: [
                                        { key: 'description', label: 'Cobertura' },
                                        { key: 'value', label: 'Valor Anual' }
                                    ],
                                    values: [
                                        {
                                           description: "Cobertura básica: Incendios o rayos, explosión, inundación.",
                                           value: '$500.000'
                                        },
                                        {
                                            description: 'Cobertura básica + cobertura adicional de robo.',
                                            value: '$700.000'
                                        },
                                        {
                                            description: 'Cobertura básica + cobertura robo + Cobertura desastres naturales (tsunami, volcán)',
                                            value: '$950.000'
                                        },
                                       
                                             ],
                                }
                                    
                             
                                        
                            }
                        ],
                        options: [
                            { option: "A", id: "1.1.1.1" },
                            { option: "B", id: "1.1.1.2" },
                            { option: "C", id: "1.1.1.3" },
                            { option: "D", id: "1.1.1.4" }
                        ]
                    }
                },
        // 3.3
            {
                id: "3.3",
                type: "mala",
                desc: "Tener la plata en la casa te da disponibilidad inmediata. Y no tienes que pagarle a ningún banco para que te la guarden. Puedes conseguir una caja fuerte o un buen escondite que nadie pueda detectar. ",
                feedback: [
                            "Cuando guardas dinero en escondites o cajas fuertes, te expones a que te lo roben o a que lo gastes en cualquier momento.",
                            "    ‎",
                            "Tener guardado el dinero en una entidad financiera te brinda tranquilidad, esto no se compara con los costos bancarios que de pronto tendrías que asumir.",
                            "    ‎",
                            "Otra opción es buscar un producto financiero que te ofrezca rendimientos, así tu ahorro sería mayor.",
                        ],
                answer: {
                    pages: [
                        {
                            desc: [
                                "¡Gracias por tu consejo!",
                                "    ‎",
                                "Me acabo de acordar de lo que le pasó a mi primo Luis.",
                                "    ‎",
                                "Él tenía bastante dinero ahorrado en efectivo, pero se entraron los ladrones a la casa y se lo llevaron todo. No había a quien reclamarle. Creo que mejor lo guardaré en el banco.",
                                ],
                            },
                        {
                            desc: "Fui al banco y ya abrí la cuenta. Pero antes de irme, me recomendaron tener un seguro para mi negocio y no sé cuál elegir."
                        },
                        {
                            table: {
                                title: [
                                        'Estas fueron las opciones:',
                                        "    ‎",
                                        ],
    
                                        columns: [
                                            { key: 'description', label: 'Cobertura' },
                                            { key: 'value', label: 'Valor anual' }
                                        ],
                                        values: [
                                            {
                                               description: "Cobertura básica: Incendios o rayos, explosión, inundación.",
                                               value: '$500.000'
                                            },
                                            {
                                                description: 'Cobertura básica + cobertura adicional de robo.',
                                                value: '$700.000'
                                            },
                                            {
                                                description: 'Cobertura básica + cobertura robo + cobertura para desastres naturales como tsunami y volcán',
                                                value: '$950.000'
                                            },
                                   
                                         ],
                            }
                                
                         
                                    
                        }
                    ],
                    options: [
                        { option: "A", id: "1.1.1.1" },
                        { option: "B", id: "1.1.1.2" },
                        { option: "C", id: "1.1.1.3" },
                        { option: "D", id: "1.1.1.4" }
                    ]
                }
            }
]
}

export default HistoryJose;