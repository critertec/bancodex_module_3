const HistoryJose = {
    id: 9,
    personage: 'jose',
    title: 'history-3',
    cover: 'bg-production-uniform',
    desc: "José quiere hacer crecer su fábrica de uniformes a otras ciudades del país. Con lo aprendido en el curso, ha logrado hacer un plan de negocio y sabe que para la primera fase de expansión requiere $ 200.000.000 COP, y que podrá recuperarlos en menos de 12 meses si todo sale bien. Es un alto riesgo y sabe que deberá trabajar mucho más para sacar el proyecto adelante. ¿Debería hacerlo? ",
    ptsMax: 11,
    answer: {
        pages: [
            {
                desc: [
                    "Buenas tardes. Una vez más, gracias por atenderme. Estoy un poco nervioso.",
                    "Después de revisar mis gastos y posibles ingresos con la expansión, no sé si pedirle al banco un préstamo o no para lograr hacer la expansión este año. ",
                    "Es mucho dinero, y si no sale bien, no sé qué puede pasar."
                ]
            }
        ],
        options: [
            { option: "A", id: "1" },
            { option: "B", id: "2" },
            { option: "C", id: "3" },
        
        ]
    },
    listOptions: [
    // 1
        {
            id: '1',
            type: "buena",
            desc: "En los negocios siempre hay que tener las cuentas claras para no correr riesgos innecesarios. Si tu situación actual tu permite agregar un préstamo adicional y pagarlo más fácilmente con ingresos futuros, podrías tomar esa opción. Apalancarse con un crédito bien negociado es una oportunidad para adelantar el crecimiento unos años. ",
            answer: {
                pages: [
                    {
                        desc: 'Tienes razón. Voy a pedir el crédito. Tengo una serie de contratos que me permitirán manejar la situación y muchas oportunidades en la nueva ciudad.'
                    },
                    {
                        desc: "Llamé al banco, me entrevisté con la gerente y entregué toda la documentación que me pidieron. Dicen que me pueden ayudar de diferentes formas, y me propusieron lo siguiente: "
                    },
                    {
                        desc: [
                            'Crédito rotativo de $ 100.000.000 COP',
                            'Tasa de 1,8 % mensual',
                           ' Tiempo: 12 meses'
                        ]
                    },
                    {
                        desc: [
                            'Crédito de Capital de trabajo de $ 200.000.000 COP',
                            'Tasa de 1,6 % mensual',
                            'Tiempo: 60 meses'
                        ]
                    },
                    {
                        desc: [
                            "Crédito de $ 400.000.000 COP",
                            "Tasa del 1 %",
                            "Tiempo: 24 meses"
                        ]
                    }
                ],
                options: [
                    { option: 'A', id: "1.1" },
                    { option: 'B', id: "1.2" },
                    { option: 'C', id: "1.3" }
                ]
            }
        },
        // 1.1
            {
                id: "1.1",
                type: "neutral",
                desc: "Con 100 millones, que puedes ir pagando y volviendo a disponer de ese dinero, podríamos trabajar.",
                answer: {
                    pages: [
                        {
                            desc: "¡Gracias! Pero para hacer la obra necesito los $ 200.000.000 COP de inmediato, no puedo hacerlo con la mitad. Creo que pediré los $ 200.000.000 COP de una vez y proyecto mi flujo de caja como me enseñaron. "
                        },
                        {
                            desc: "¡Me aprobaron el crédito! Sin embargo, tengo un problema. Se me dañó mi carro y no tenía seguro. Necesito comprar uno nuevo para poderme transportar entre ciudades. ¿Podría usar parte del crédito para eso? Las tasas están más bajas frente a las que me ofrecen por comprar un vehículo como persona natural."
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
                        type: "neutral",
                        desc: "¡No! Si pidió plata pensando en un plan de expansión del negocio, no es bueno desordenar las cuentas porque puede afectar el plan.",
                        answer: {
                            pages: [
                                {
                                    desc: "Igual necesito un vehículo para moverme entre las ciudades. No puedo llevar la mercancía en bus o en avión. Sacaré otro crédito para tener un carro para la compañía. "
                                },
                                {
                                    desc: [
                                        'Unos meses después:', 
                                        'José: Haber hecho crecer mi negocio con el apalancamiento del banco fue la mejor decisión que pude haber tomado. Si lo hubiese hecho solo, me habría tomado muchos años de ahorro. ',
'                                        Ahora, con la facturación actual creo que quiero seguir expandiéndome.'
                                    ],
                                    question: "¿Crees que es una buena idea? "
                                }
                            ],
                            options: [
                                { option: "A", id: "1.1.1.1" },
                                { option: "B", id: "1.1.1.2" },
                                { option: "C", id: "1.1.1.3" }
                            ]
                        }
                    },
                    // 1.1.1.1
                        {
                            id: "1.1.1.1",
                            type: "mala",
                            desc: "¡Siga creciendo sin parar! Si le fue bien la primera vez, endéudese un poco más y abra otra ciudad.",
                            answer: {
                                pages: [
                                    {
                                        desc: "José siguió tu consejo y abrió dos ciudades más. Su endeudamiento era muy alto, al igual que las cuotas que debía pagar. Después de unos meses decidió cerrar una de las ciudades mientras terminaba de pagar los créditos iniciales. ¡Pero el sueño se mantiene!"
                                    }
                                ],
                                end: true
                            }
                        },
                    // 1.1.1.2
                        {
                            id: "1.1.1.2",
                            type: "neutral",
                            desc: "¡No! Más de una inversión al año es una exageración. Puede perderlo todo. ",
                            answer: {
                                pages: [
                                    {
                                        desc: "La empresa de José está muy bien, y los créditos se están pagando fácilmente. Sin embargo, José piensa recurrentemente si dejó pasar una oportunidad al no haber abierto otra ciudad. Nunca lo sabrá pero, al menos, sabe que no perdió todo por tomar decisiones aceleradas sin información. "
                                    }
                                ], end: true
                            }
                        },
                    // 1.1.1.3
                        {
                            id: "1.1.1.3",
                            type: "buena",
                            desc: "Depende. Analice el flujo de caja actual basándose en los peores meses, y luego haga una proyección de las cuotas que tendría que pagar con un nuevo crédito. Si cree que puede pagar ambas cuotas sin problema, puede ser una buena opción. Si no, pague rápido el préstamo inicial. ",
                            answer: {
                                pages: [
                                    {
                                        desc: "Después de haber hecho un análisis de sus ingresos y gastos, José se dio cuenta de que podía pagar el crédito inicial en la mitad del tiempo que había proyectado inicialmente, y eso fue exactamente lo que hizo. Ahora abrió una nueva ciudad con los números claros y los riesgos bajos. ¡José está imparable!"
                                    }
                                ],
                                end: true
                            }
                        },
                // 1.1.2
                    {
                        id: "1.1.2",
                        type: "neutral",
                        desc: "Podría llamar al banco y pedir un incremento del préstamo o un nuevo préstamo con tasa preferencial, ya que el carro es un activo productivo necesario para la operación y ventas.",
                        answer: {
                            pages: [
                                {
                                    desc: "¡Que gran idea! La tasa que me aprobaron está mejor que las que están ofreciendo a las personas. Igual, el carro lo necesita la compañía, ¿no? Así lo haré. ¡Gracias!"
                                }
                            ],
                            options: [
                                { option: "A", id: "1.1.1.1" },
                                { option: "B", id: "1.1.1.2" },
                                { option: "C", id: "1.1.1.3" }
                            ]
                        }
                    },
                // 1.1.3
                    {
                        id: "1.1.3",
                        type: "neutral",
                        desc: "Si necesita comprar un carro a crédito, lo mejor es que lo haga como persona natural y no confunda las cuentas de la compañía con las personales, así la tasa sea un poco más alta.",
                        answer: {
                            pages: [
                                {
                                    desc: "Estuve revisando y no es posible que, como persona natural, pague todos esos intereses. Al parecer la empresa ha demostrado ser una gran garantía y me prestan a tasas mucho más bajas. Pediré un incremento en el cupo inicial."
                                }
                            ],
                            options: [
                                { option: "A", id: "1.1.1.1" },
                                { option: "B", id: "1.1.1.2" },
                                { option: "C", id: "1.1.1.3" }
                            ]
                        }
                    },
        // 1.2
            {
                id: "1.2",
                type: "neutral",
                desc: "Pidamos de una vez los 200 millones, que fijo en 5 años se paga.",
                answer: {
                    pages: [
                        {
                            desc: "¡Estaba pensando exactamente lo mismo! Si me organizo bien y proyecto el pago mensual, seguramente no tendré ningún problema. Y si tengo excedentes, pues abono al capital. "
                        },
                        {
                            desc: "¡Me aprobaron el crédito! Sin embargo, tengo un problema. Se me dañó mi carro y no tenía seguro. Necesito comprar uno nuevo para poderme transportar entre ciudades. ¿Podría usar parte del crédito para eso? Las tasas están más bajas frente a las que me ofrecen por comprar un vehículo como persona natural."
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
                type: "neutral",
                desc: "¡$ 400.000.000 al 1% es una oportunidad que no podemos desaprovechar!",
                answer: {
                    pages: [
                        {
                            desc: "La tasa se ve muy atractiva, pero en el curso me enseñaron que no debería endeudarme si no tengo un proyecto puntual para hacer crecer el negocio. Creo que empezaré con los $ 200.000.000 COP, así la tasa esté más alta. "
                        },
                        {
                            desc: "¡Me aprobaron el crédito! Sin embargo, tengo un problema. Se me dañó mi carro y no tenía seguro. Necesito comprar uno nuevo para poderme transportar entre ciudades. ¿Podría usar parte del crédito para eso? Las tasas están más bajas frente a las que me ofrecen por comprar un vehículo como persona natural."
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
            id: '2',
            type: "neutral",
            desc: "Tienes razón en estar preocupado. Si el negocio actual está dando excedentes de efectivo, podrías ir guardándolos y, cuando tengas los $200.000.000, puede invertir en la fase 1. Así te ahorras los intereses.",
            answer: {
                pages: [
                    {
                        desc: 'Seguí tu consejo. Después de 10 años logré abrir la fábrica en otra ciudad. Cuando llegué ya habían entrado un par de competidores, pero la demanda aún es buena y puedo sacarle provecho. Me habría gustado haber llegado antes. '
                    }
                ],
                end: true
            }
        },
    // 3
        {
            id: '3',
            type: "mala",
            desc: "Endeudarse en esa cantidad de dinero puede ser perjudicial para su tranquilidad mental. Si como vives estás bien, ¿por qué quisieras meterte en estos problemas? Sugiero que sigas trabajando como lo has hecho últimamente. ",
            answer: {
                pages: [
                    {
                        desc: 'José se mantuvo como venía. Vive bien y ya casi se jubila. Aunque de vez en cuando, mirando la ventana, se pregunta cómo podría haber sido su vida si hubiera tomado decisiones más arriesgadas. '
                    }
                ],
                end: true
            }
        }
    ]
}

export default HistoryJose;