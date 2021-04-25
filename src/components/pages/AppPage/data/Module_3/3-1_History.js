const HistoryDonAlfonso = {
    id: 7,
    personage: "don alfonso",
    cover: 'bg-mechanics',
    title: 'history-1',
    desc: "El banco llamó a Don Alfonso a informarle que su taller 'Entre ruedas' había recibido un crédito pre-aprobado para libre inversión. Es la primera vez que Don Alfonso tiene acceso a un crédito y no sabe bien cómo aprovecharlo o si debería tomarlo. ¿Podrías ayudarlo?",
    ptsMax: 14,
    answer: {
        pages: [
            {
                desc: "Una vez más yo. Lamento incomodarlo tanto, pero sus consejos en el pasado me han ayudado para estar donde estoy hoy en día. Imagínese que, después de haber ahorrado y de tener organizado mis ingresos y gastos, el banco me llamó y me ofreció un crédito para usarlo como quiera en el tallercito.",
                question: "¿Debería aceptarlo?"
            }
        ],
        options: [
            { option: "A", id: "1" },
            { option: "B", id: "2" }
        ]
    },
    listOptions: [
    // 1 
        {
            id: "1",
            type: "buena",
            desc: "Un crédito puede servir para crecer. ¿Tiene planes para usar ese dinero? ",
            feedback: "Antes de aceptar cualquier crédito es importante tener un plan de inversión para asegurar que tomar el crédito será un buen negocio.",
            answer: {
                pages: [
                    {
                        desc: "Si, tengo dos opciones para utilizar ese dinero. ¿Cuál cree que debería ser el mejor uso?"
                    },
                    {
                        desc: "He alquilado un nuevo local y tengo tanta clientela que podría comprar otra máquina para atenderlos más rápido y a más personas. La máquina y sus elementos adicionales me valen $ 70.000.000 COP, pero estoy seguro que podría pagarlo rápidamente si las ventas siguen como van."
                    },
                    {
                        desc: "Me dicen que la pintura del local viejo está desgastada. Entonces quiero aprovechar para volver a pintar todo el local, remodelar las oficinas para que sientan más modernas, igual es donde paso la mayor parte del día y debería sentirme a gusto. ¿no? Si estoy a gusto en mi trabajo, podré ser más productivo."
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
                desc: "Si tiene un plan de expansión y cree que los flujos futuros dan para pagar las cuotas, podría aprovechar el crédito. Tenga cuidado de no excederse. ",
                feedback: "Apalancar proyectos que incrementen la facturación o la rentabilidad del negocio es una buena opción siempre y cuendo los excedentes puedan pagar las cuotas con los intereses.",
                answer: {
                    pages: [
                        {
                            desc: "Así lo haré. Tengo fe en el negocio y las ventas van bien. Si no es hoy, ¿cuándo?",
                            question: "Muchas gracias por el consejo. "
                        },
                        {
                            desc: [
                                "(Unos meses después):",
                                "Por telefono: ¿Hola? Otra vez yo, Alfonso del taller. Lamento molestar pero me encuentro en un problema y no se como solucionarno. El flujo de clientes ha bajado un poco por las vacaciones, y no contaba con eso, y ahora no voy a poder pagar la próxima cuota del préstamo que pedí."
                            ],
                            question: "¿Qué debería hacer?"
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
                        id: '1.1.1',
                        type: "neutral",
                        desc: "Don Alfonso, tranquilo. Usted dice que esta bajada de ventas es temporal. Con que deba una cuota y se ponga al día en la siguiente no pasa nada. A veces ni cuenta se dan, lo importante es no quedar en mora en dos cuotas. Así que métale ganas y pague ambas cuotas cuanto las ventas mejoren.",
                        feedback: "Los negocios son variables y puede que haya periodos malos. Es importante siempre hablar de forma proactiva con las entidades financieras y exponer la situación para encontrar las mejores opciones que no afecten el historial crediticio.",
                        answer: {
                            pages: [
                                {
                                    desc: "¡Así hice! Aunque sí se dieron cuenta. Lo bueno fue que me llamaron a preguntar por el pago y les conté toda la situación. Ahora me están ofreciendo opciones para restructurar el crédito y no quedar mal otra vez.",
                                    question: "¿Cuál de estas opciones debería escoger?"
                                },
                                {
                                    desc: [
                                        "Opción 1:",
                                        "Ampliamos el tiempo del crédito de 24 a 60 meses. Los intereses aumentan del 1,5 % al 2,2 %, pero la cuota mensual disminuye. Con esto podría contar con los excedentes de ventas futuras para más inversiones."
                                    ]
                                },
                                {
                                    desc: [
                                        "Opción 2: ",
                                        " Me dan dos meses de periodo de gracia. Después del segundo mes, debo volver a pagar las cuotas regulares  y los intereses de estos dos meses de gracia. En dos meses ya habrá acabado el periodo de vacaciones y las ventas deberían subir otra vez."
                                    ]
                                },
                                {
                                    desc: [
                                        "Opción 3:",
                                        "Si incremento la tasa de intereses del 1,5 % al 1,8 % mensual me ofrecen también un periodo de gracia de un año pagando solo intereses, sin abono a capital. Sin embargo, debo dejar como garantía mi taller."
                                    ]
                                }
                            ],
                            options: [
                                { option: "A", id: "1.1.1.1" },
                                { option: "B", id: "1.1.1.2" },
                                { option: "B", id: "1.1.1.3" }
                            ]
                        },
                    },
                    // 1.1.1.1
                        {
                            id: "1.1.1.1",
                            type: "neutral",
                            desc: "La opción 1 parece una buena alternativa. Tener un crédito a largo plazo le permite tener un flujo de caja más saludable capaz de afrontar los momentos de ventas bajas. Igual, si tiene los excedentes necesarios, puede hacer abonos al capital. ",
                            feedback: "La reestructuración de los créditos deben tener en cuenta el tiempo y la tasa de interés con base en los flujos de efectivo que genere el negocio. Generalmente se puede pedir el plazo máximo y se podrían hacer abonos a capital cuando haya disponibilidad.",
                            answer: {
                                pages: [
                                    {
                                        desc: "Gracias. Creo que la opción de hacer abonos a capital me da bastante tranquilidad. Así también tengo tiempo para que el negocio crezca. "
                                    },
                                    {
                                        desc: [
                                            "Unos meses después: ",
                                            "Don Alfonso: Pasaba a saludar. Después de nuestra última conversación todo ha ido mucho mejor. Las ventas empezaron a crecer y ahora los excedentes me alcanzan y me sobran para pagar las cuotas que terminé negociando con el banco."
                                        ],
                                        question: "¿Qué podría hacer con esos excedentes?"
                                    }
                                ],
                                options: [
                                    { option: "A", id: "1.1.1.1.1" },
                                    { option: "B", id: "1.1.1.1.2" },
                                    { option: "C", id: "1.1.1.1.3" }
                                ]
                            }
                        },
                        // 1.1.1.1.1
                            {
                               id: "1.1.1.1.1",
                                type: "mala",
                                desc: "Eso es utilidad. Aproveche y disfrute esa plata. Siga con el plan de remodelaciones o váyase de viaje con su familia. Se ve un futuro brillante para el taller. ",
                                feedback: "Si tienes excedentes y puedes hacer abonos de capital puedes ahorrar dinero de intereses y mejorar tu calificación financiera.",
                                answer: {
                                    pages: [
                                        {
                                            desc: "Creo que prefiero pagar los créditos más rápido. A veces no puedo dormir pensando en ellos.",
                                            question: "¿Qué más tranquilidad que no tener deudas?"
                                        }
                                    ],
                                    answer: {
                                        feedback: "Ha sido un largo recorrido desde que iniciamos con mi primer taller y, gracias a su ayuda, mi empresa está más estable. Tengo una buena relación con los bancos, y entiendo cuándo y cómo utilizar los créditos para alcanzar más rápido mis sueños. No habría podido lograrlo sin su ayuda. ¡Muchas gracias!",
                                        end: true
                                    }
                                }
                         },
                        // 1.1.1.1.2
                            {
                                id: "1.1.1.1.2",
                                type: "buena",
                                desc: "Aproveche y pague el crédito anticipado. Apenas pague el crédito, y si mantiene estos flujos de ingresos, podrá disfrutar su plata dentro de poco.",
                                feedback: "Si tienes excedentes y puedes hacer abonos de capital puedes ahorrar dinero de intereses y mejorar tu calificación financiera.",
                                answer: {
                                    pages: [
                                        {
                                            desc: "¡Tiene razón! Me permitiría bajar las cuotas mensuales y tener más tranquilidad. Sin contar que pago menos intereses. "
                                        }
                                    ],
                                    answer: {
                                        feedback: "Ha sido un largo recorrido desde que iniciamos con mi primer taller y, gracias a su ayuda, mi empresa está más estable. Tengo una buena relación con los bancos, y entiendo cuándo y cómo utilizar los créditos para alcanzar más rápido mis sueños. No habría podido lograrlo sin su ayuda. ¡Muchas gracias!",
                                        end: true
                                    }
                                }
                            },
                        // 1.1.1.1.3
                            {
                                id: "1.1.1.1.3",
                                type: "neutral",
                                desc: "Podría guardar estos excedentes en una cuenta de ahorros para el próximo periodo de vacaciones o de ventas bajas, así tendrá disponibilidad para pagar las cuotas en caso que haya malos meses en el futuro.",
                                feedback: "Si tienes excedentes y puedes hacer abonos de capital puedes ahorrar dinero de intereses y mejorar tu calificación financiera.",
                                answer: {
                                    pages: [
                                        {
                                            desc: "Es una buena opción. Aunque los intereses que pago en el crédito son mucho más altos que los intereses que me genera tener el dinero en la cuenta de ahorros. Creo que prefiero pagar el crédito."
                                        }
                                    ],
                                    answer: {
                                        feedback: "Ha sido un largo recorrido desde que iniciamos con mi primer taller y, gracias a su ayuda, mi empresa está más estable. Tengo una buena relación con los bancos, y entiendo cuándo y cómo utilizar los créditos para alcanzar más rápido mis sueños. No habría podido lograrlo sin su ayuda. ¡Muchas gracias!",
                                        end: true
                                    }
                                }
                            },
                    // 1.1.1.2
                        {
                            id: "1.1.1.2",
                            type: "neutral",
                            desc: "Si usted cree que las ventas se recuperarán después de las vacaciones, la opción 2 parece una gran oportunidad. Así no incrementa los costos financieros sin necesidad. ",
                            feedback: "La reestructuración de los créditos deben tener en cuenta el tiempo y la tasa de interés con base en los flujos de efectivo que genere el negocio. Generalmente se puede pedir el plazo máximo y se podrían hacer abonos a capital cuando haya disponibilidad.",
                            answer: {
                                pages: [
                                    {
                                        desc: "Estoy seguro que las ventas volverán a subir. Llevo varios años y siempre pasa lo mismo. Debí haber caido en cuenta cuando hice la proyección de pago. Pero ahora con la nueva maquinaria no tendré problema."
                                    },
                                    {
                                        desc: [
                                            "Unos meses después: ",
                                            "Don Alfonso: Pasaba a saludar. Después de nuestra última conversación todo ha ido mucho mejor. Las ventas empezaron a crecer y ahora los excedentes me alcanzan y me sobran para pagar las cuotas que terminé negociando con el banco."
                                        ],
                                        question: "¿Qué podría hacer con esos excedentes?"
                                    }
                                ],
                                options: [
                                    { option: "A", id: "1.1.1.1.1" },
                                    { option: "B", id: "1.1.1.1.2" },
                                    { option: "C", id: "1.1.1.1.3" }
                                ]
                            }
                        },
                        // 1.1.1.3
                        {
                            id: "1.1.1.3",
                            type: "neutral",
                            desc: "La opción 3 podría funcionar. Dejar el taller como garantía es un movimiento arriesgado, pero la tasa es buena y el año de gracia permitirá que tenga ahorros para afrontar la deuda en caso de tener meses de malas ventas en el futuro. ",
                            feedback: "La reestructuración de los créditos deben tener en cuenta el tiempo y la tasa de interés con base en los flujos de efectivo que genere el negocio. Generalmente se puede pedir el plazo máximo y se podrían hacer abonos a capital cuando haya disponibilidad.",
                            answer: {
                                pages: [
                                    {
                                        desc: "Es arriesgado, pero tengo fe en mi negocio. Este año de gracia me permitirá estar tranquilo ahorrando para nuevas oportunidades. ¡Gracias!"
                                    },
                                    {
                                        desc: [
                                            "Unos meses después: ",
                                            "Don Alfonso: Pasaba a saludar. Después de nuestra última conversación todo ha ido mucho mejor. Las ventas empezaron a crecer y ahora los excedentes me alcanzan y me sobran para pagar las cuotas que terminé negociando con el banco."
                                        ],
                                        question: "¿Qué podría hacer con esos excedentes?"
                                    }
                                ],
                                options: [
                                    { option: "A", id: "1.1.1.1.1" },
                                    { option: "B", id: "1.1.1.1.2" },
                                    { option: "C", id: "1.1.1.1.3" }
                                ]
                            }
                        },
                // 1.1.2
                    {
                        id: '1.1.2',
                        type: "buena",
                        desc: "No hay que alarmarse. A veces los pronósticos fallan. Lo mejor que podría hacer es llamar al banco y explicar la situación. Contarles que es un tema temporal y que usted se pondrá al día pero que no quiere quedar reportado por un pequeño traspiés. Renegocie las condiciones. ",
                        feedback: "Los negocios son variables y puede que haya periodos malos. Es importante siempre hablar de forma proactiva con las entidades financieras y exponer la situación para encontrar las mejores opciones que no afecten el historial crediticio.",
                        answer: {
                            pages: [
                                {
                                    desc: "¡Llamé al banco! Entendieron la situación y me están ofreciendo diferentes opciones.",
                                    question: "¿Cuál debería escoger?"
                                },
                                {
                                    desc: [
                                        "Opción 1:",
                                        "Ampliamos el tiempo del crédito de 24 a 60 meses. Los intereses aumentan del 1,5 % al 2,2 %, pero la cuota mensual disminuye. Con esto podría contar con los excedentes de ventas futuras para más inversiones."
                                    ]
                                },
                                {
                                    desc: [
                                        "Opción 2: ",
                                        " Me dan dos meses de periodo de gracia. Después del segundo mes, debo volver a pagar las cuotas regulares  y los intereses de estos dos meses de gracia. En dos meses ya habrá acabado el periodo de vacaciones y las ventas deberían subir otra vez."
                                    ]
                                },
                                {
                                    desc: [
                                        "Opción 3:",
                                        "Si incremento la tasa de intereses del 1,5 % al 1,8 % mensual me ofrecen también un periodo de gracia de un año pagando solo intereses, sin abono a capital. Sin embargo, debo dejar como garantía mi taller."
                                    ]
                                }
                            ],
                            options: [
                                { option: "A", id: "1.1.1.1" },
                                { option: "B", id: "1.1.1.2" },
                                { option: "B", id: "1.1.1.3" }                                
                            ]
                        }
                    },
                // 1.1.3
                    {
                        id: '1.1.3',
                        type: "mala",
                        desc: "¡No puede dejarse colgar, Don Alfonso! Llame a otro banco y pida un crédito, así podrá quedar al día y cuando vuelvan a estar bien las ventas arregla ambos créditos. ",
                        feedback: "PAgar créditos con créditos no se recomienda a menos que se haga como compra de cartera con condiciones mejores al crédito original, en tiempo o en tasa de interés según la necesidad puntual.",
                        answer: {
                            pages: [
                                {
                                    desc: "¿Endeudarme con otro banco? Yo sabía que meterme en esto iba a traer complicaciones. Pues si es la mejor opción supongo que lo haré, pero no me hace muy feliz."
                                }
                            ],
                            end: true
                        }
                    },
        // 1.2
            {
                id: "1.2",
                type: "mala",
                desc: "Una renovación de las oficinas puede hacer que todos se sientan más felices. Creo que es una buena forma de aprovechar la oportunidad",
                feedback: "Pedir créditos para gastos que no generen flujos futuros no es una práctica recomendada. Este tipo de gastos se pueden realizar con los excedentes de la operación, pero si hay un endeudamiento se recomienda que se use en proyectos que generen mayor facturación u optimización de costos para mejorar la rentabilidad.",
                answer: {
                    pages: [
                        {
                            desc: "Si lo había pensado. Sin embargo, en el curso de Mis Finanzas Lab siempre fueron enfáticos en que las deudas deben servir para apalancar el negocio y no estoy seguro de que vaya a vender más si pinto las oficinas. Creo que invertiré en la máquinaria y más bien, con los excedentes de las nuevas ventas, pinto las oficinas. "
                        },
                        {
                            desc: [
                                "(Unos meses después):",
                                "Por telefono: ¿Hola? Otra vez yo, Alfonso del taller. Lamento molestar pero me encuentro en un problema y no se como solucionarno. El flujo de clientes ha bajado un poco por las vacaciones, y no contaba con eso, y ahora no voy a poder pagar la próxima cuota del préstamo que pedí."
                            ],
                            question: "¿Qué debería hacer?"
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
        type: "mala",
        desc: "¡No! Bajo ninguna circunstancia acepte un crédito. Eso siempre genera intereses carísimos y termina saliendo por un ojo de la cara. Lo mejor que uno puede hacer es esperar a tener la plata y pagar de contado. ",
        feedback: "A veces la única forma de crecer es con apalancamiento financiero. Hay oportunidades que deben aprovecharse en el tiempo justo, y no apalancarse en los instrumentos financieros puede hacer perder estas oportunidades.",
        answer: {
            pages: [
                {
                    desc: "Si he escuchado eso varias veces, pero tengo planes para el dinero que seguro traerán grandes resultados para el negocio.",
                    question: "¿En cuál cree que debería enfocarme?"
                },
                {
                    desc: "He alquilado un nuevo local y tengo tanta clientela que podría comprar otra máquina para atenderlos más rápido y a más personas. La máquina y sus elementos adicionales me valen $ 70.000.000 COP, pero estoy seguro que podría pagarlo rápidamente si las ventas siguen como van."
                },
                {
                    desc: "Me dicen que la pintura del local viejo está desgastada. Entonces quiero aprovechar para volver a pintar todo el local, remodelar las oficinas para que sientan más modernas, igual es donde paso la mayor parte del día y debería sentirme a gusto. ¿no? Si estoy a gusto en mi trabajo, podré ser más productivo."
                }
            ],
            options: [
                { option: "A", id: "1.1" },
                { option: "B", id: "1.2" }       
            ]
        }
    }
    ]
    
}

export default HistoryDonAlfonso;