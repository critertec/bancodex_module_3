const HistoryGloria = {
    id: "2-2",
    personage: "gloria",
    cover: 'bg-clothing',
    title: 'history 2',
    desc: "Gloria es una gran comerciante. Sabe dónde quedan las mejores fábricas de ropa, consigue muy buenos precios y acaba de montar su local en un sector concurrido. Los primeros meses fueron difíciles y sus ingresos apenas alcanzaban para pagar los gastos y la mercancía. Pero hace tres meses empezó a pagar todos los costos y le quedaban $500.000 de sobra cada mes. Durante esos meses no se daba cuenta y terminaba gastándoselos, pero después de haber estudiado en Mis Finanzas Lab, sabe que puede hacerlo mucho mejor y que esos excedentes pueden tener un mejor uso.",
    ptsMax: 12,
    answer: {
        personageAction: "upset",
        pages: [
            {
                desc: [
                        "¡Hola!",
                        "    ‎",
                        "Sé que si sigo con esta buena racha, pronto podré comprar el local que tengo arrendado. Me están sobrando aproximadamente $500.000 cada mes."
                ],
                question: "¿Qué debería hacer?" 
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
            desc: "Hiciste empresa para disfrutar la vida. Uno trabaja para vivir y no vive para trabajar. Esos $500.000 te los mereces, así que disfrútalos.",
            feedback: [
                        "El hábito de ahorro es fundamental para el crecimiento de la empresa.",
                        "    ‎",
                        "Uno de los mayores errores que se comenten es aumentar los gastos a la vez que aumentan los ingresos. Si empieza a haber excedentes se sugiere ahorrarlos.",
                    ],          
            answer: {
                pages: [
                    {
                        desc: [
                                "Tienes toda la razón",
                                "    ‎",
                                "Me merezco gastar algo en mí, pero no creo que necesite $500.000 mensuales adicionales para eso.",
                                "    ‎",
                                "Más bien, quisiera ir guardando ese dinero.",
                                "    ‎",
                            ],
                                question: "¿Cuál será la mejor forma de hacerlo?"
                    }
                ],
                options: [
                    { option: "A", id: "1.1" },
                    { option: "B", id: "1.2" },
                    { option: "C", id: "1.3" }
                ]
            }
        },
        // 1.1
            {
                id: "1.1",
                type: "mala",
                desc: "Una caja fuerte o un escondite secreto. No se te ocurra gastar tu plata pagándole a un banco para que te guarde tu dinero.",
                feedback: [
                            "Si bien esconder el dinero en caja fuerte o en otro lugar es mejor que gastarlo, no estás protegiendo el dinero de diferentes situaciones como robos o perdidas.",
                            "    ‎",
                            "Los productos financieros te permiten tener mayor disponibilidad y seguridad de tus ahorros.",
                ],
                answer: {
                    personageAction: "upset",
                    pages: [
                        {
                            desc: [
                                "Seguí tu consejo, pero el fin de semana pasado entraron los ladrones y se llevaron la caja fuerte.",
                                "    ‎",
                                "Creo que definitivamente el banco es más seguro. Iré a abrir una cuenta para guardar la plata que sobra del negocio."
                            ],
                        },
                        {
                            desc: "Me ofrecieron un seguro para PYMES que cubre: ",
                            list: [
                                "Incendio",
                                "Robo",
                                "Inundación",
                                "Motín",
                                "Tsunami",
                                "Volcán",
                                "Infidelidad de empleados",
                            ],
                        },
                        {
                            question: "¿Debería tomarlo?", 
                            desc: [
                                "    ‎",    
                                "Quedé asustada con todo lo que puede pasar.",
                                "    ‎",
                                "Cuesta $8.000.000 al año y puedo pagarlo en 12 meses.",
                            ],
                        }
                    ],
                    options: [
                        { option: "A", id: "1.1.1" },
                        { option: "B", id: "1.1.2" },
                        { option: "C", id: "1.1.3" }
                    ]
                }
            },
            // 1.1.1
                {
                    id: "1.1.1",
                    type: "buena",

                    desc: "Pregunta por seguros más sencillos que cubran lo que tu negocio necesita en este momento.",
                    feedback: "Los seguros deben ajustarse a tu estado actual. Define muy bien cuales son tus riesgos y entiende los costos en los que podrías incurrir si pasa una calamidad. Analiza tu flujo de caja y define cuál opción es la mejor.",
                    answer: {
                    personageAction: "ok",
                        pages: [
                            {
                                desc: [
                                        "¡Sí había!",
                                        "    ‎",
                                        "Hay uno que cubria robo, incendio e inundación. Eso, creo, es posible que pase.",
                                        "    ‎",
                                        "Menos mal pregunté por un seguro que se ajustaba a mis necesidades.",
                                ],
                            }
                        ],
                        answer: {
                            feedback: [
                                "Gloria lleva varios meses ahorrando su dinero en las cuentas del banco.",
                                "    ‎",
                                "Cada vez su historial financiero se ve mejor, y al haber elegido un seguro para proteger su inventario se siente más tranquila en caso de que algo ocurra.",
                    ],
                            end: true
                        }
                    }
                },
            // 1.1.2
                {
                    id: "1.1.2",
                    type: "neutral",
                    desc: "Está perfecto. No hay mejor ahorro que en prevención. ",
                    feedback: [
                                "Es importante analizar las particularidades y necesidades de tu negocio.",
                                "    ‎",
                                "A veces, encontrarás servicios o productos que pueden no estar ajustados a tu estado actual.",
                                "    ‎",
                                "En este caso, el seguro que se ofrece tiene coberturas que realmente no se ajustan a las características de tu negocio.",
                            ],
                    answer: {
                        pages: [
                            {
                                desc: "¡Oh no! Me tuve que endeudar para poder pagar este seguro. "
                            }
                        ],
                        end: true
                    }
                },
            // 1.1.3
                {
                    id: "1.1.3",
                    type: "mala",
                    desc: "No te gastes los únicos excedentes que has generado en tu negocio en más gastos. Recuerda que la clave es gastar menos de lo que ganas.",
                    feedback: "Una gran forma de ahorrar es disminuyendo los riesgos. Los seguros son una gran estrategia de continuidad de negocio en caso que alguna calamidad o siniestro se presente. Robos, daños, innundaciones, daños a terceros, etc. Al no estar asegurado, una de estas situaciones pueden hacerte perder el trabajo de toda la vida.",
                    answer: {
                        pages: [
                            {
                                desc: [
                                        "Todo iba muy bien hasta el final del mes, cuando Gloria llegó al local y vio que se habían robado varias cajas de mercancía.",
                                        "    ‎",
                                        "Si hubiera estado asegurada, no habría tenido ningún problema. ¡No vuelve a pasar!"
                                ],
                            }
                        ],
                        end: true
                    }
                },
        // 1.2
            {
                id: "1.2",
                type: "buena",
                desc: "Puedes abrir una cuenta de ahorros exclusiva para los excedentes del negocio. Así sabrás cuánta plata está generando tu empresa y estás tranquila de tener el dinero en un lugar seguro. ",
                feedback: [
                        "¡Muy bien!",
                        "    ‎",
                        "Con una cuenta para depositar tus ganancias podrás saber cuánto estas ganando con tu negocio."
                        ],


                answer: {
                    personageAction: "ok",
                    pages: [
                        {
                            desc: "Suena bien eso de la cuenta de ahorros. Creo que lo haré como dices. ¡Muchas gracias!"
                        },
                        {
                            desc: "Me ofrecieron un seguro para PYMES que cubre: ",
                            list: [
                                "Incendio",
                                "Robo",
                                "Inundación",
                                "Motín",
                                "Tsunami",
                                "Volcán",
                                "Infidelidad de empleados",
                            ],
                        },
                        {
                            question: "¿Debería tomarlo?", 
                            desc: [
                                "    ‎",    
                                "Quedé asustada con todo lo que puede pasar.",
                                "    ‎",
                                "Cuesta $8.000.000 al año y puedo pagarlo en 12 meses.",
                            ],
                        }
                    ],
                    options: [
                        { option: "A", id: "1.1.1" },
                        { option: "B", id: "1.1.2" },
                        { option: "C", id: "1.1.3" }                       
                    ]
                }
            },
        // 1.3
            {
                id: "1.3",
                type: "mala",
                desc: "Abre una cuenta de ahorro programado con una cuota mensual de $600.000. Después de un año ya tendrías 6 millones de pesos ahorrados. ",
                feedback: [
                            "¡Ten cuidado!",
                            "    ‎",
                            "Las cuotas de lo que te comprometes a ahorrar no pueden ser más altas de lo que realmente puedes depositar.",
                            "    ‎",
                            "Si esto ocurre empezaras a tener problemas flujo o peor, podrían penalizarte la tasa que pactaste cuando abriste tu producto.",
                ],
                answer: {
                    pages: [
                        {
                            desc: "Después de la segunda cuota me di cuenta de que no podía mantener el pago de $600.000 mensuales, así que preferí entrar en una cuenta de ahorros para no quedar tan apretada. "
                        },
                        {
                            desc: "Cuando fui al banco me ofrecieron un seguro para PYMES que cubre: ",
                            list: [
                                "Incendio",
                                "Robo",
                                "Inundación",
                                "Motín",
                                "Tsunami",
                                "Volcán",
                                "Infidelidad de empleados",
                            ],
                        },
                        {
                            question: "¿Debería tomarlo?", 
                            desc: [
                                "    ‎",    
                                "Quedé asustada con todo lo que puede pasar.",
                                "    ‎",
                                "Cuesta $8.000.000 al año y puedo pagarlo en 12 meses.",
                            ],
                        }
                    ],
                    options: [
                        { option: "A", id: "1.1.1" },
                        { option: "B", id: "1.1.2" },
                        { option: "C", id: "1.1.3" }
                    ]
                }
            },
    // 2
        {
            id: "2",
            type: "buena",
            desc: "Ahórrala en algún lugar seguro. Si mantienes el hábito de gastar menos de lo que recibes, estarás muy cerca de lograr la independencia financiera. ",
            feedback: "¡Muy bien! Si hay excedentes se pueden guardar en lugares seguros.",
            answer: {
                pages: [
                    {
                        desc: "¿A que te refieres con un lugar seguro? ¿Una caja fuerte? "
                    }
                ],
                options: [
                    { option: "A", id: "1.1" },
                    { option: "B", id: "1.2" },
                    { option: "C", id: "2.1" }
                ]
            }
        },
        // 2.1
            {
                id: "2.1",
                type: "neutral",
                desc: "Abre una cuenta de ahorro programado para asegurar que no te gastes la plata en otras cosas.",
                feedback: "Las cuentas de ahorro programado son una buena opción cuando puedes asegurar los depósitos a los que te comprometes.",
                answer: {
                    pages: [
                        {
                            desc: "Me preguntan por la cuota de ahorro. ¿Qué valor me aconsejas?"
                        }
                    ],
                    options: [
                        { option: "A", id: "2.1.1" },
                        { option: "B", id: "2.1.2" },
                        { option: "C", id: "2.1.3" }
                    ]
                }
            },
            // 2.1.1
                {
                    id: "2.1.1",
                    type: "neutral",
                    desc: "Ahorro de $100.000",
                    feedback: "Si el análisis histórico te muestra excedentes constantes, podrías hacer ahorro programado del valor más bajo, que en caso haya más excedentes puedes aumentar el ahorro. Pero si generas cuotas más altas y en algún mes no puedes pagar tendrás problemas.",
                    answer: {
                        pages: [
                            {
                                desc: "Muchas gracias por tu consejo. Empecé a ahorrar $100.000 mensuales. Sé que no es mucho, pero algo es algo. Como siempre voy a consignar la cuota mensual, la gerente del banco me invitó a un café para que le contara un poco más del negocio. Quedó fascinada con mi entusiasmo, pero me dice que debo tener cuidado si mi empresa no está asegurada. "
                            },
                            {
                                desc: "Me ofrecieron un seguro para PYMES que cubre Incendio, Robo o Inundación en mis locales. Tomarlo me cuesta $1.000.000 al año y puedo pagarlo mensualmente. Pero no estoy segura si quiero gastarme esa plata. Nunca me ha pasado nada. "
                            }
                        ],
                        options: [
                            { option: "A", id: "2.1.1.1" },
                            { option: "B", id: "2.1.1.2" }
                        ]
                    }
                },
                    // 2.1.1.1
                        {
                            id: "2.1.1.1",
                            type: "buena",
                            desc: "¡Hazlo! Menos de $90.000 al mes y podrás estar tranquila sabiendo que tu mercancía está a salvo.",
                            feedback: "Los seguros deben ajustarse a tu estado actual. Define muy bien cuales son tus riesgos y entiende los costos en los que podrías incurrir si pasa una calamidad. Analiza tu flujo de caja y define cuál opción es la mejor.",
                            answer: {
                                personageAction: "ok",
                                pages: [
                                    {
                                        desc: "Listo. Tienes razón. Podré dormir más tranquila sabiendo que alguien responde. "
                                    }
                                ],
                                feedback: [
                                            "Gloria lleva varios meses ahorrando su dinero en las cuentas del banco.",
                                            "    ‎",
                                            "Cada vez su historial financiero se ve mejor, y al haber elegido un seguro para proteger su inventario se siente más tranquila en caso de que algo ocurra.",
                                ],
                                end: true
                            }
                        },
                    // 2.1.1.2
                        {
                            id: "2.1.1.2",
                            type: "mala",
                            desc: "No lo hagas. Si nunca te ha pasado nada no tiene por qué empezar ahora. Todo es cuestión de pensar positivamente.",
                            feedback: [
                                        "Una gran forma de ahorrar es disminuyendo los riesgos.",
                                        "    ‎",
                                        "Los seguros son una gran estrategia de continuidad de negocio en caso que alguna calamidad o siniestro se presente. Robos, daños, innundaciones, daños a terceros, etc.",
                                        "    ‎",
                                        "Al no estar asegurado, una de estas situaciones pueden hacerte perder el trabajo de toda la vida.",
                            ],
                            answer: {
                             pages: [
                            {
                                desc: [
                                        "Todo iba muy bien hasta el final del mes, cuando Gloria llegó al local y vio que se habían robado varias cajas de mercancía.",
                                        "    ‎",
                                        "Si hubiera estado asegurada, no habría tenido ningún problema. ¡No vuelve a pasar!"
                                ],
                            }
                        ],
                        end: true
                    }
                        },
            // 2.1.2
                {
                    id: "2.1.2",
                    type: "buena",
                    desc: "Ahorro de $300.000",
                    feedback: "Si las cuotas son más altas de las que puedes pagar será contraproducente para tu flujo de caja operativa, o puedes tener penalizaciones en la tasa o en el retraso del desembolso.",
                    answer: {
                        personageAction: "ok",
                        pages: [
                            {
                                desc: "Muchas gracias por tu consejo. Empecé a ahorrar $300.000 y ya tengo un buen capital que me da tranquilidad. Sin embargo, la última vez la gerente del banco me contó que un cliente había perdido todo por no haber asegurado su empresa y no quería que me pasara lo mismo a mi. "
                            },
                            {
                                desc: "Me ofrecieron un seguro para PYMES que cubre Incendio, Robo o Inundación en mis locales. Tomarlo me cuesta $1.000.000 al año y puedo pagarlo mensualmente. Pero no estoy segura si quiero gastarme esa plata. Nunca me ha pasado nada. "
                            }
                        ],
                        options: [
                            { option: "A", id: "2.1.1.1" },
                            { option: "B", id: "2.1.1.2" }
                        ]
                    }
                },
            // 2.1.3
                {
                    id: "2.1.3",
                    type: "mala",
                    desc: "Ahorro de $800.000",
                    feedback: "Si las cuotas son más altas de las que puedes pagar será contraproducente para tu flujo de caja operativa, o puedes tener penalizaciones en la tasa o en el retraso del desembolso.",
                    answer: {
                        pages: [
                            {
                                desc: [
                                        "Traté de hacerlo, pero hubo varios meses en los que no podía responder con la cuota mínima.",
                                        "    ‎",
                                        "Me tocó llamar al banco y cambiar las condiciones por unas más fáciles para mi, así que ahora tengo cuotas de $300.000.",
                                        "    ‎",
                                        "Por cierto, cuando hice el cambio me recomendaron asegurar la empresa en caso de cualquier calamidad."
                                ],
                            },
                            {
                                desc: [
                                        "Me ofrecieron un seguro para PYMES que cubre Incendio, Robo o Inundación en mis locales.",
                                        "    ‎",
                                        "Tomarlo me cuesta menos de $90.000 mensuales, pero no estoy segura si quiero gastarme esa plata.",
                                        "    ‎",
                                        "Nunca me ha pasado nada. ",
                                ],
                            }
                        ],
                        options: [
                            { option: "A", id: "2.1.1.1" },
                            { option: "B", id: "2.1.1.2" }
                        ]
                    }
                },
    // 3
        {
            id: "3",
            type: "mala",
            desc: "¡Toma riesgos! Si alguna de las ideas de tu cuñado sale bien, podrías ser una accionista importante de una gran compañía. ",
            feedback: "Es importante mantener el foco del negocio. Muchas veces recibirás diferentes oportunidades para nuevos negocios, pero mientras no tengas el negocio principal estable, es recomendable invertir en tu propio negocio antes que ayudar a otros a montar el de ellos.",
            answer: {
                pages: [
                    {
                        desc: "Suena muy bien, pero hablé con mi familia y al parecer él no es tan buena paga como dice. Prefiero no arriesgar la poca plata que me queda en un negocio que no conozco. ¿Cómo podría cuidar estos excedentes cuando lleguen"
                    }
                ],
                options: [
                    { option: "A", id: "1.1" },
                    { option: "B", id: "1.2" },
                    { option: "C", id: "1.3" }
                ]
            }
        }
    ]
}

export default HistoryGloria;