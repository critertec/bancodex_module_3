const HistoryJose = {
    id: 4,
    personage: 'jose',
    title: 'history-1',
    cover: 'bg-production-uniform',
    desc: "Después de haber ganado la licitación con la que José creó su empresa, ha trabajado fuertemente y se ha posicionado en la ciudad por su calidad y servicio. Distribuye a algunos hospitales, colegios y fábricas del sector. “Uniformes Geniales S.A.S” ha tenido un crecimiento durante el último año y, por primera vez desde su constitución, ha dejado utilidades de $ 20.000.000 COP. Después de haber escuchado a Karem, José sabe que existen diferentes formas para aprovechar estos excedentes de forma responsable y está buscando consejos para hacerlo bien.",
    ptsMax: 12,
    answer: {
        pages: [
            {
                desc: "¡Hola! Gracias por ayudarme. Después de tanto trabajo, por fin logré tener utilidades. Trabajé como nunca, pero lo he logrado.",
                question: "¿Qué debería hacer con estos $20.000.000?"
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
            "¡Hola José! Que buenas noticias. ¿Has considerado que después de 10 años deberías tomar unas vacaciones?. Con esa plata podrías llevar a tu familia a Europa. ¡Te lo mereces!",
            "Para mejorar la productividad es importante el descanso. Deberías pensar en unas vacaciones aprovechando todo el trabajo que has hecho bien este año. ¡Te lo mereces!"
        ],
        feedback: "Todo se basa en los objetivos que tengas como empresario. Si bien es cierto que después de tanto trabajar, descansar y disfrutar los rendimientos del negocio puede ser una buena opción, es importante analizar cuales son tus metas a corto y mediano plazo y tratar que las decisiones que tomes te acerquen a ellas. Si quieres tener una empresa más grande y sólida para tener tranquilidad financiera, deberías pensar en invertir y no en gastar. Al menos una parte considerable.",
        answer: {
            pages: [
                {
                    desc: "Siempre he querido viajar y conocer. Pero no puedo asegurar que este año sea tan bueno como el anterior y quisiera estar tranquilo y tener la plata disponible.  Debería empezar a hacer mi fondo de emergencia."
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
                        desc: "Me da miedo ir al banco y que me ofrezcan cosas que no necesito. ¿Por qué servicio, que creas me dé mayor valor, debería preguntar? "
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
                desc: "Podrías abrir un CDT para que te generen intereses, y así esos $ 20.000.000 sean mucho más en un año.",
                feedback: "Todo depende de los objetivos, los proyectos que tengas y la disponibilidad de efectivo que requieras. Si tienes un gran proyecto donde requieras cumplir rápidamente una meta de ahorro, seguramente querrás tener poca disponibilidad para no caer en la tentación de gastarlo, y que te permita generar rendimientos financieros.",
                answer: {
                    pages: [
                        {
                            desc: "Fui al banco y abrí un CDT. Me asesoraron y me informaron que es una buena opción para que mi dinero no pierda valor en el tiempo y, al mismo tiempo, mantener mis ahorros lejos de la tentación de retirarlos. Me ofrecieron varias opciones: un mes, tres meses, seis meses o un año. Escogí la opción de seis meses, porque es posible que requiera ese dinero para un pedido grande.",
                        },
                        {
                            desc: "¡Me siento genial! Me siento mucho más tranquilo con mis ahorros en el CDT, seguros y creciendo. Pero, antes de irme del banco, me ofrecieron unos seguros para la empresa y no sé cuál debería elegir. "
                        },
                        {
                            desc: [
                                "Cobertura básica: Incendios o rayos, Explosión, Inundación. Valor: $ 800.000 COP",
                                "Cobertura básica + cobertura adicional de robo. Valor: $ 1.000.000 COP",
                                "Cobertura básica + cobertura robo + Cobertura desastres naturales (tsunami, volcán). Valor: $ 1.100.000 COP"
                            ]
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
            // 1.1.1.1
                {
                    id: "1.1.1.1",
                    type: "neutral",
                    desc: "Deberías irte por el seguro más económico. Para el banco es importante que te asegures, pero no inviertas mucho en eso.",
                    feedback: "Los seguros deben ajustarse a tu estado actual. Define muy bien cuales son tus riesgos y entiende los costos en los que podrías incurrir si pasa una calamidad. Analiza tu flujo de caja y define cuál opción es la mejor. En este caso, elegiste una opción que cubría más de lo que tenías, haciéndote pagar más de lo necesario.",
                    answer: {
                        pages: [
                            {
                                desc: "Muchas gracias. Sí, debería empezar a mejorar las relaciones con el banco."
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
                    feedback: "Una gran forma de ahorrar es disminuyendo los riesgos. Los seguros son una gran estrategia de continuidad de negocio en caso que alguna calamidad o siniestro se presente. Robos, daños, innundaciones, daños a terceros, etc. Los seguros deben ajustarse a tu estado actual. Define muy bien cuales son tus riesgos y entiende los costos en los que podrías incurrir si pasa una calamidad. Analiza tu flujo de caja y define cuál opción es la mejor.",
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
                    feedback: "Los seguros deben ajustarse a tu estado actual. Define muy bien cuales son tus riesgos y entiende los costos en los que podrías incurrir si pasa una calamidad. Analiza tu flujo de caja y define cuál opción es la mejor. En este caso, elegiste una opción que cubría más de lo que tenías, haciéndote pagar más de lo necesario.",
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
                                desc: "Después de unos meses hubo una inundación y se dañó una de las máquinas de producción que vale $20.000.000 COP. El ahorro en los seguros no alcanzó a cubrir la pérdida de los activos."
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
                            desc: "Fui al banco y ya abrí la cuenta. Pero antes de irme, me recomendaron tener un seguro para la empresa y no sé cuál elegir. "
                        },
                        {
                            desc: [
                                "Cobertura básica: Incendios o rayos, Explosión, Inundación. Valor: $ 800.000 COP",
                                "Cobertura básica + cobertura adicional de robo. Valor: $ 1.000.000 COP",
                                "Cobertura básica + cobertura robo + Cobertura desastres naturales (tsunami, volcán). Valor: $ 1.100.000 COP"
                            ]
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
        type: "neutral",
        desc: "Creo que lo mejor es tener la plata donde tengas acceso inmediato. Ahorrar también es no gastar en cosas que puedes ahorrarte, como los servicios bancarios. ",
        feedback: "Los costos bancarios son mínimos a comparación de la tranquilidad, seguridad y disponibilidad que te genera tener el dinero en entidades financieras. Al tomar la decisión de guardarlo en escondites o cajas fuertes puedes estar poniendo en riesgo tu patrimonio o teniendo poca disponibilidad en caso de estar lejos del sitio donde tienes guardado el dinero.",
        answer: {
            pages: [
                {
                    desc: "Gracias por tu consejo. Pero me acabo de acordar de lo que le pasó a mi primo Luis, que tenía bastante dinero ahorrado en efectivo, pero se entraron los ladrones a la casa y se lo llevaron todo. No había a quien reclamarle. Creo que mejor lo guardaré en el banco.",
                },
                {
                    desc: "Fui al banco y ya abrí la cuenta. Pero antes de irme, me recomendaron tener un seguro para la empresa y no sé cuál elegir.",
                },
                {
                    desc: [
                        "Cobertura básica: Incendios o rayos, Explosión, Inundación. Valor: $ 800.000 COP",
                        "Cobertura básica + cobertura adicional de robo. Valor: $ 1.000.000 COP",
                        "Cobertura básica + cobertura robo + Cobertura desastres naturales (tsunami, volcán). Valor: $ 1.100.000 COP"
                    ]
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
        feedback: "Tener metas a corto, mediano y largo plazo te permitirá tomar este tipo de reuniones más fácilmente. Si no sabes en que vas a utilizar el dinero, guardarlo por guardarlo se llama atesorar y estarías perdiendo la posibilidad de obtener rendimientos o de multiplicar los ahorros. Está bien ser precabido, pero el dinero bien utilizado puede multiplicarse en algo que se conoce como 'Bola de nieve'.",
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
        desc: "¿No tienes algún plan para ese dinero? ¿Algo que haga que la empresa crezca y puedas ganar más en el futuro? ",
        feedback: "",
        answer: {
            pages: [
                {
                    desc: "Últimamente me han pedido más uniformes de los que somos capaces de producir. Pero una máquina nueva me puede costar hasta $ 40.000.000 COP. En 6 meses recibiré otros $ 20.000.000 COP de un pedido que se demoró en pagar, eso podría invertirlo en la maquinaria nueva.",
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
            feedback: "",
            answer: {
                pages: [
                    {
                        desc: "Fui al banco y decidí abrir una cuenta de ahorros. Me asesoraron y me informaron que es una buena opción para crear historial financiero, y quizás en un futuro me sea útil para pedir un préstamo para el negocio. La ventaja de la cuenta de ahorros es que en cualquier momento puedo retirar el dinero a través de un cajero, puedo hacer compras con la tarjeta debito o incluso puedo hacer transferencias a través de internet. Eso sí, la clave es utilizar ese dinero únicamente para los gastos que realmente requiera el negocio."
                    },
                    {
                        desc: "Fui al banco y ya abrí la cuenta. Pero antes de irme, me recomendaron tener un seguro para la empresa y no sé cuál elegir."
                    },
                    {
                        desc: [
                            "Cobertura básica: Incendios o rayos, Explosión, Inundación. Valor: $ 800.000 COP",
                            "Cobertura básica + cobertura adicional de robo. Valor: $ 1.000.000 COP",
                            "Cobertura básica + cobertura robo + Cobertura desastres naturales (tsunami, volcán). Valor: $ 1.100.000 COP"
                        ]
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
                feedback: "Todo depende de los objetivos, los proyectos que tengas y la disponibilidad de efectivo que requieras. Si tienes un gran proyecto donde requieras cumplir rápidamente una meta de ahorro, seguramente querrás tener poca disponibilidad para no caer en la tentación de gastarlo, y que te permita generar rendimientos financieros.",
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
                                desc: "Es una buena opción para que mi dinero no pierda valor en el tiempo y, al mismo tiempo, mantener mis ahorros lejos de la tentación de retirarlos. Aunque la tasa es más alta, necesito el dinero dentro de 6 meses. Creo que tomaré esa opción mejor. "
                            },
                            {
                                desc: "¡Me siento genial! Me siento mucho más tranquilo con mis ahorros en el CDT, seguros y creciendo. Pero, antes de irme del banco, me ofrecieron unos seguros para la empresa y no sé cuál debería elegir."
                            },
                            {
                                desc: [
                                    "Cobertura básica: Incendios o rayos, Explosión, Inundación. Valor: $ 800.000 COP",
                                    "Cobertura básica + cobertura adicional de robo. Valor: $ 1.000.000 COP",
                                    "Cobertura básica + cobertura robo + Cobertura desastres naturales (tsunami, volcán). Valor: $ 1.100.000 COP"
                                ]
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
                    feedback: "Si tu objetivo es comprar una máquina en 6 meses, tener CDTs a 30 días no te permitirá recibir la mejor tasa de rendimientos, ya que podrías hacerla a 6 meses y seguir cumpliendo tu objetivo por lo que estás ahorrando.",
                    answer: {
                        pages: [
                            {
                                desc: "Creo que puedo incrementar la rentabilidad. Igual solo necesito el dinero hasta dentro de 6 meses."
                            },
                            {
                                desc: "¡Me siento genial! Me siento mucho más tranquilo con mis ahorros en el CDT, seguros y creciendo. Pero, antes de irme del banco, me ofrecieron unos seguros para la empresa y no sé cuál debería elegir."
                            },
                            {
                                desc: [
                                    "Cobertura básica: Incendios o rayos, Explosión, Inundación. Valor: $ 800.000 COP",
                                    "Cobertura básica + cobertura adicional de robo. Valor: $ 1.000.000 COP",
                                    "Cobertura básica + cobertura robo + Cobertura desastres naturales (tsunami, volcán). Valor: $ 1.100.000 COP"
                                ]
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
                                desc: "¡Perfecto! Estaba pensando en el mismo. Puedo ahorrar y dentro de 6 meses, que necesite el dinero, lo saco. "
                            },
                            {
                                desc: "¡Me siento genial! Me siento mucho más tranquilo con mis ahorros en el CDT, seguros y creciendo. Pero, antes de irme del banco, me ofrecieron unos seguros para la empresa y no sé cuál debería elegir."
                            },
                            {
                                desc: [
                                    "Cobertura básica: Incendios o rayos, Explosión, Inundación. Valor: $ 800.000 COP",
                                    "Cobertura básica + cobertura adicional de robo. Valor: $ 1.000.000 COP",
                                    "Cobertura básica + cobertura robo + Cobertura desastres naturales (tsunami, volcán). Valor: $ 1.100.000 COP"
                                ]
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
                type: "neutral",
                desc: "Tener la plata en la casa te da disponibilidad inmediata. Y no tienes que pagarle a ningún banco para que te la guarden. Puedes conseguir una caja fuerte o un buen escondite que nadie pueda detectar. ",
                feedback: "Los costos bancarios son mínimos a comparación de la tranquilidad, seguridad y disponibilidad que te genera tener el dinero en entidades financieras. Al tomar la decisión de guardarlo en escondites o cajas fuertes puedes estar poniendo en riesgo tu patrimonio o teniendo poca disponibilidad en caso de estar lejos del sitio donde tienes guardado el dinero.",
                answer: {
                    pages: [
                        {
                            desc: "Gracias por tu consejo. Pero me acabo de acordar lo que le pasó a mi primo Luis, que cuando tenía bastante dinero ahorrado en efectivo se entraron los ladrones y se lo llevaron todo. No había a quien reclamarle. Creo que mejor lo guardaré en el banco."
                        },
                        {
                            desc: "Fui al banco y ya abrí la cuenta. Pero antes de irme, me recomendaron tener un seguro para la empresa y no sé cuál elegir."
                        },
                        {
                            desc: [
                                "Cobertura básica: Incendios o rayos, Explosión, Inundación. Valor: $ 800.000 COP",
                                "Cobertura básica + cobertura adicional de robo. Valor: $ 1.000.000 COP",
                                "Cobertura básica + cobertura robo + Cobertura desastres naturales (tsunami, volcán). Valor: $ 1.100.000 COP"
                            ]
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