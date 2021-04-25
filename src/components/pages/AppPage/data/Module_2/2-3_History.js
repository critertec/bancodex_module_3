const HistoryDonAlfonso = {
    id: 6,
    personage: 'don alfonso',
    cover: 'bg-mechanics',
    title: 'history-3',
    desc: "Don Alfonso tiene dos talleres en la ciudad. Le ha ido bien y cree que es el momento de hacer una expansión más grande. Ha tratado de pedir prestado pero no ha tenido buenos resultados y no tiene la plata para hacerlo por su cuenta. ¿Qué puede hacer?",
    answer: {
        pages: [
            {
                desc: "Sumercé, buenas tardes. Otra vez yo. Después de toda su ayuda he logrado organizar mis talleres y ganar plata. Creo que es el momento de seguir creciendo: quisiera poner un mega taller en el centro de la ciudad en 8 meses.",
                question: "¿Qué debería hacer?"
            }
        ],
        options: [
            { option: "A", id: "1" },
            { option: "B", id: "2" },
            { option: "C", id: "3" }
        ]
    },
    ptsMax: 12,
    listOptions: [
    // 1
        {
            id: "1",
            type: "mala",
            desc: "Todo con calma, Don Alfonso. Que le haya ido bien con los primeros talleres no significa que todo sea así de fácil. Hacer una inversión tan grande puede ser perjudicial. ¿No preferiría seguir como está, sin tanto estrés y disfrutar de sus utilidades?",
            feedback: "El miedo es uno de los factores que no permiten alcanzar el potencial emprendedor. Antes de tomar decisiones de abrir o no un negocio es importante analizar los números con detenimiento y no tomar decisiones apresuradas.",
            answer: {
                pages: [
                    {
                        desc: "No he llegado hasta acá conformándome. Quiero hacer algo más grande que dure generaciones. "
                    }
                ],
                options: [
                    { option: "A", id: "1.1" },
                    { option: "B", id: "1.2" },
                ]
            }
        },
        // 1.1 
            {
                id: "1.1",
                type: "neutral",
                desc: "Primero lo primero. Pague todos los gastos y costos de la empresa y los personales, y si le llega a sobrar algo de plata, guárdela en algún lugar seguro.",
                feedback: "Si bien gastar menos de lo que gana es el hábito que debemos cuidar, el ahorro es más efectivo cuando es intencionado. Es mejor definir bien los presupuestos mensuales y destinar unos valores mínimos de ahorro, y no ahorrar solo lo que sobra",
                answer: {
                    pages: [
                        {
                            desc: "Don Alfonso siguió tu consejo, pero al no definir una meta clara, todos los meses se gastaba los excedentes en gastos varios y, por no haber ahorrado, nunca pudo abrir su mega taller. "
                        }
                    ],
                    end: true
                }
            },
        // 1.2
            {
                id: "1.2",
                type: "buena",
                desc: "¡Está bien! Me alegra que ya esté organizado, don Alfonso. Para lograr los objetivos de crecimiento, como abrir este mega taller, es importante definir una meta clara de ahorro mensual basado en sus ingresos y costos. Defina muy bien los costos que son 100 % necesarios, luego defina una cuota de ahorro y haga todo lo posible por mantenerla.",
                feedback: "Organizarse financieramente incluye ser capaz de definir los valores de ahorro antes de gastar el dinero en otras cosas. Muchas personas lo hacen al revés y primero gastan todo lo que pueden y si sobra algo lo ahorran.",
                answer: {
                    pages: [
                        {
                            desc: "¡Claro! Siempre que me proponía ahorrar con lo que me sobraba del mes, nunca sobraba nada. Voy a empezar a separar el ahorro mensual de forma sagrado",
                            question: "¿Dónde debería guardarlo?"
                        }
                    ],
                    options: [
                        { option: "A", id: "1.2.1" },
                        { option: "B", id: "1.2.2" },
                        { option: "C", id: "1.2.3" }
                    ]
                }
            },
            // 1.2.1
                {
                    id: "1.2.1",
                    type: "mala",
                    desc: "Si quiere tener disponibilidad inmediata del dinero y no gastar en servicios financieros, podría conseguirse una caja fuerte o un buen escondite para guardar todos los excedentes.",
                    feedback: "La seguridad y la disponibilidad del dinero en cuentas bancarias vale la pena por los bajos costos financieros. Tener el dinero en físico puede tener riesgo de perdidas o robos sin que nadie responda.",
                    answer: {
                        pages: [
                            {
                                desc: "Lo pensé, pero imaginese que al vecino se le inundó el apartamento una vez y todos sus ahorros quedaron destruidos. Prefiero no caer en eso y aprender de los errores de los demás. Si quisiera otra opción, ¿que podría hacer?"
                            }
                        ],
                        options: [
                            { option: "A", id: "1.2.1.1" },
                            { option: "B", id: "1.2.1.2" }
                        ]
                    }
                },
                // 1.2.1.1
                    {
                        id: "1.2.1.1",
                        type: "buena",
                        desc: "Una cuenta de ahorro programado es ideal para cumplir su meta. Además, como usted va a seguir un plan de pagos, es buena evidencia para que despues le den un préstamo si le hace falta dinero.",
                        feedback: "Las cuentas de ahorro programado son una gran opción para alcanzar las metas financieras. Así aseguras que parte de los excedentes van a una cuenta segura con rendimientos y no tienes la disponibilidad para gastarlo en elementos no escenciales.",
                        answer: {
                            pages: [
                                {
                                    desc: [
                                        "Ahh si. Alguna vez escuché de esa opción. Es como una cuota obligatoria para ahorrar y así uno no se gasta la plata en bobadas, ¿no?",

                                        "Si quisiera hacerla debo pedir un valor de cuota mensual. Si en promedio mis utilidades son de $ 1.500.000 COP, pero tengo meses malos que solo me dejan $ 500.000 COP y unos muy buenos que dejan $ 5.000.000 COP, ¿qué cuota debería pedir? "
                                    ]
                                }
                            ],
                            options: [
                                { option: "A", id: "1.2.1.1.1" },
                                { option: "B", id: "1.2.1.1.2" },
                                { option: "C", id: "1.2.1.1.3" }
                            ]
                        }
                    },
                        // 1.2.1.1.1
                            {
                                id: "1.2.1.1.1",
                                type: "neutral",
                                desc: "Empiece lento. Así sean $ 50.000 COP mensuales. Así también tendrá la disponibilidad de usar los excedentes para otros proyectos o gustos. ",
                                feedback: "A menor tiempo, menor rentabilidad de los CDTs. Es importante sincronizar la meta de ahorro/inversión con los plazos de los instrumentos de ahorro para poder tomar la mejor decisión de disponibilidad y rentabilidad.",
                                answer: {
                                    pages: [
                                        {
                                            desc: "Pero con $ 50.000 COP mensuales nunca podré montar el taller. Creo que puedo ahorrar al menos $ 500.000 COP sin arriesgarme a no cumplir. Me iré con esa opción. "
                                        },
                                        {
                                            desc: "Unos meses después: ¡Sumercé, cómo está! Gracias a sus consejos y a las buenas ventas de estos meses logré tener ahorrado lo suficiente para abrir el mega taller. Fui al banco a sacar mis ahorros y el gerente me insistió en que debería asegurar el nuevo taller para estar más tranquilo. Me ofreció un seguro de PYME básico que protege el taller en caso de incendio, explosión o inundación, sin embargo me dice que puedo ampliarlo.  ",
                                            question: "¿Qué me recomienda?"
                                        }
                                    ],
                                    options: [
                                        { option: "A", id: "1.2.1.1.1.1" },
                                        { option: "B", id: "1.2.1.1.1.2" },
                                        { option: "C", id: "1.2.1.1.1.3" }
                                    ]
                                }
                            },
                                // 1.2.1.1.1.1
                                    {
                                        id: "1.2.1.1.1.1",
                                        type: "buena",
                                        desc: "Si usted tiene maquinaria o inventario de alto valor podría adicionar un seguro contra robo.",
                                        feedback: "Asegurar tus dos activos productivos es la mejor opción y al mejor precio.",
                                        answer: {
                                            pages: [
                                                {
                                                    desc: "¡Claro! Es mucho más probable un robo que un incendio. Me aseguraré y voy a incluir eso. ¡Muchas gracias!"
                                                }
                                            ],
                                            answer: {
                                                feedback: "Don Alfonso está muy bien y su negocio mejor que nunca. Todo el taller está protegido, dándole tranquilidad cada día.",
                                                end: true
                                            }
                                        }
                                    },
                                // 1.2.1.1.1.2
                                    {
                                        id: "1.2.1.1.1.2",
                                        type: "mala",
                                        desc: "No se gaste el dinero en ningún seguro. Nunca pasa nada y sí se gasta todo el dinero en eso.",
                                        feedback: "Una gran forma de ahorrar es disminuyendo los riesgos. Los seguros son una gran estrategia de continuidad de negocio en caso que alguna calamidad o siniestro se presente. Robos, daños, innundaciones, daños a terceros, etc. Al no estar asegurado, una de estas situaciones pueden hacerte perder el trabajo de toda la vida.",
                                        answer: {
                                            pages: [
                                                {
                                                    desc: "Si usted lo dice…"
                                                }
                                            ],
                                            answer: {
                                                feedback: "Después de unos meses hubo un incendio en el taller, que dañó una máquina que costaba más de $ 15.000.000 COP. Don Alfonso no volverá a caer en ese riesgo otra vez.",
                                                end: true
                                            }
                                        }
                                    },
                                // 1.2.1.1.1.3
                                    {
                                        id: "1.2.1.1.1.3",
                                        type: "neutral",
                                        desc: "Así está bien. Lo importante es que el banco vea que usted está asegurado, así que lo más barato sirve. ",
                                        feedback: "Asegurar tus dos activos productivos es la mejor opción y al mejor precio.",
                                        answer: {
                                            pages: [
                                                {
                                                    desc: "Si, lo importante es quedar bien con el banco. Le diré que nos quedemos con el seguro básico. "
                                                }
                                            ],
                                            answer: {
                                                feedback: "Don Alfonso ha hecho crecer su negocio. Hace unos días hubo un incendio pero el seguro cubrió todos los daños y le permitió seguir operando sin problema. Sin embargo, decidió mejorar el seguro con pólizas contra robo al darse cuenta de lo que estaba arriesgando. ",
                                                end: true
                                            }
                                        }
                                    },
                        // 1.2.1.1.2
                            {
                                id: "1.2.1.1.2",
                                type: "mala",
                                desc: "Si quiere alcanzar rápido tu meta, debería al menos programar $ 1.500.000 COP, que es el promedio de tus excedentes. Así podremos construir rápidamente el mega taller.",
                                feedback: "No cumplir con las cuotas de ahorro programado puede traer penalizaciones. Antes de definir las cuotas revisa bien los históricos y no te comprometas con cuotas más altas a los mínimos que puedes planear.",
                                answer: {
                                    pages: [
                                        {
                                            desc: "Creo que fue una mala idea. Tuve un par de meses malos y no alcancé a cubrir la cuota. Creo que la bajaré a $ 500.000 COP."
                                        },
                                        {
                                            desc: "Unos meses después: ¡Sumercé, cómo está! Gracias a sus consejos y a las buenas ventas de estos meses logré tener ahorrado lo suficiente para abrir el mega taller. Fui al banco a sacar mis ahorros y el gerente me insistió en que debería asegurar el nuevo taller para estar más tranquilo. Me ofreció un seguro de PYME básico que protege el taller en caso de incendio, explosión o inundación, sin embargo me dice que puedo ampliarlo. ",
                                            question: "¿Qué me recomienda?"
                                        }
                                    ],
                                    options: [
                                        { option: "A", id: "1.2.1.1.1.1" },
                                        { option: "B", id: "1.2.1.1.1.2" },
                                        { option: "C", id: "1.2.1.1.1.3" }
                                    ]
                                }
                            },
                        // 1.2.1.1.3
                            {
                                id: "1.2.1.1.3",
                                type: "buena",
                                desc: "Creo que es prudente que programe los $ 500.000 COP mensuales que le sobran mínimo después de haber pagado todos los costos de operación. ",
                                answer: {
                                    pages: [
                                        {
                                            desc: "Sí. $ 500.000 COP suena algo posible y que me ayudará a alcanzar la meta."
                                        },
                                        {
                                            desc: "Unos meses después: ¡Sumercé, cómo está! Gracias a sus consejos y a las buenas ventas de estos meses logré tener ahorrado lo suficiente para abrir el mega taller. Fui al banco a sacar mis ahorros y el gerente me insistió en que debería asegurar el nuevo taller para estar más tranquilo. Me ofreció un seguro de PYME básico que protege el taller en caso de incendio, explosión o inundación, sin embargo me dice que puedo ampliarlo. ",
                                            question: "¿Qué me recomienda?"
                                        }
                                    ],
                                    options: [
                                        { option: "A", id: "1.2.1.1.1.1" },
                                        { option: "B", id: "1.2.1.1.1.2" },
                                        { option: "C", id: "1.2.1.1.1.3" }
                                    ]
                                }
                            },
                // 1.2.1.2
                    {
                        id: "1.2.1.2",
                        type: "neutral",
                        desc: "Cada mes que tenga excedente puede ir al banco y abrir un CDT para que esos ahorros le generen más plata.",
                        feedback: "Los CDT son instrumentos de ahorro que no te permiten tener disponibilidad de tu dinero. Normalmente se usan cuando no se tiene ningún plan de inversión en el corto plazo o no se requiere un flujo de caja para la operación.",
                        answer: {
                            pages: [
                                {
                                    desc: "Si he escuchado del famoso CDT. Entiendo que si necesito la plata no la puedo sacar sin una penalización. ¿Cierto? Bueno, esperemos que no la necesite.",
                                    question: "¿Qué CDT saco?"
                                }
                            ],
                            options: [
                                { option: 'A', id: '1.2.2.1' },
                                { option: 'B', id: "1.2.2.2" },
                                { option: 'C', id: "1.2.2.3" },
                            ]
                        }
                    },
            // 1.2.2
                {
                    id: "1.2.2",
                    type: "neutral",
                    desc: "Cada mes que tenga excedente, puede ir al banco y abrir un CDT para que esos ahorros le generen más plata.",
                    feedback: "Los CDT son instrumentos de ahorro que no te permiten tener disponibilidad de tu dinero. Normalmente se usan cuando no se tiene ningún plan de inversión en el corto plazo o no se requiere un flujo de caja para la operación.",
                    answer: {
                        pages: [
                            {
                                desc: "Si he escuchado del famoso CDT. Entiendo que si necesito la plata no la puedo sacar sin una penalización. ¿Cierto? Bueno, esperemos que no la necesite. ¿Qué CDT saco?"
                            }
                        ],
                        options: [
                            { option: "A", id: "1.2.2.1" },
                            { option: "B", id: "1.2.2.2" },
                            { option: "C", id: "1.2.2.3" }
                        ]
                    }
                },  
                    // 1.2.2.1
                        {
                            id: "1.2.2.1",
                            type: "buena",
                            desc: "Si necesita el dinero en 8 meses, puede iniciar con CDTs de 180 días los primeros meses, luego de 90 días y al final de 30 días. Así optimiza sus intereses.",
                            feedback: "¡Lo más importante es entender cuando necesitas la disponibilidad del efectivo! Si tienes una meta de ahorro sincroniza las fechas de disponibilidad con los instrumentos de ahorro. ",
                            answer: {
                                pages: [
                                    {
                                        desc: "Que buen consejo. Así, dentro de 8 meses podré disponer de mis ahorros y sus rendimientos. ¡Así lo haré!"
                                    },
                                    {
                                        desc: "Unos meses después: ¡Sumercé, cómo está! Gracias a sus consejos y a las buenas ventas de estos meses logré tener ahorrado lo suficiente para abrir el mega taller. Fui al banco a sacar mis ahorros y el gerente me insistió en que debería asegurar el nuevo taller para estar más tranquilo. Me ofreció un seguro de PYME básico que protege el taller en caso de incendio, explosión o inundación, sin embargo me dice que puedo ampliarlo. ",
                                        question: "¿Qué me recomienda?"
                                    }
                                ],
                                options: [
                                    { option: "A", id: "1.2.1.1.1.1" },
                                    { option: "B", id: "1.2.1.1.1.2" },
                                    { option: "C", id: "1.2.1.1.1.3" }
                                ]
                            }
                        },
                    // 1.2.2.2
                        {
                            id: "1.2.2.2",
                            type: "mala",
                            desc: "Cada mes, puede meter su utilidad en CDT a 360 días, que tienen tasas hasta del 5 %.",
                            feedback: "Lo más importante es entender cuando necesitas la disponibilidad del efectivo! Si tienes una meta de ahorro sincroniza las fechas de disponibilidad con los instrumentos de ahorro. Si Don Alfonso quiere montar su taller en 8 meses, los CDT a un año no son la mejor opción.",
                            answer: {
                                pages: [
                                    {
                                        desc: "Ufff, pero el negocio del mega taller me obliga a tener disponibilidad en 8 meses. Esta opción no me sirve. Creo que me iré con unos CDT a 180 y 90 días. "
                                    },
                                    {
                                        desc: "Unos meses después: ¡Sumercé, cómo está! Gracias a sus consejos y a las buenas ventas de estos meses logré tener ahorrado lo suficiente para abrir el mega taller. Fui al banco a sacar mis ahorros y el gerente me insistió en que debería asegurar el nuevo taller para estar más tranquilo. Me ofreció un seguro de PYME básico que protege el taller en caso de incendio, explosión o inundación, sin embargo me dice que puedo ampliarlo. ",
                                        question: "¿Qué me recomienda?"
                                    }
                                ],
                                options: [
                                    { option: "A", id: "1.2.1.1.1.1" },
                                    { option: "B", id: "1.2.1.1.1.2" },
                                    { option: "C", id: "1.2.1.1.1.3" }
                                ]
                            }
                        },
                    // 1.2.2.3
                    {
                        id: "1.2.2.3",
                        type: "neutral",
                        desc: "Puede sacar CDAT de menos de 30 días para tener disponibilidad. La tasa es del 1 %. ",
                        feedback: "A menor tiempo, menor rentabilidad de los CDTs. Es importante sincronizar la meta de ahorro/inversión con los plazos de los instrumentos de ahorro para poder tomar la mejor decisión de disponibilidad y rentabilidad.",
                        answer: {
                            pages: [
                                {
                                    desc: "Es una buena opción. Aunque fijo después me gasto la plata. Creo que me iré con CDTs a 180 y 90 días, para asegurar que no me gaste la plata antes y tener la disponibilidad para dentro de 8 meses"
                                },
                                {
                                    desc: "Unos meses después: ¡Sumercé, cómo está! Gracias a sus consejos y a las buenas ventas de estos meses logré tener ahorrado lo suficiente para abrir el mega taller. Fui al banco a sacar mis ahorros y el gerente me insistió en que debería asegurar el nuevo taller para estar más tranquilo. Me ofreció un seguro de PYME básico que protege el taller en caso de incendio, explosión o inundación, sin embargo me dice que puedo ampliarlo. ",
                                    question: "¿Qué me recomienda?"
                                }
                            ],
                            options: [
                                { option: "A", id: "1.2.1.1.1.1" },
                                { option: "B", id: "1.2.1.1.1.2" },
                                { option: "C", id: "1.2.1.1.1.3" }
                            ]
                        }
                    },
            // 1.2.3
                {
                    id: "1.2.3",
                    type: "buena",
                    desc: "Una cuenta de ahorro programado es ideal para cumplir su meta. Además, como usted va a seguir un plan de pagos, es buena evidencia para que despues le den un préstamo si le hace falta dinero.",
                    feedback: "Las cuentas de ahorro programado son una gran opción para alcanzar las metas financieras. Así aseguras que parte de los excedentes van a una cuenta segura con rendimientos y no tienes la disponibilidad para gastarlo en elementos no escenciales.",
                    answer: {
                        pages: [
                            {
                                desc: [
                                    "Ahh si. Alguna vez escuché de esa opción. Es como una cuota obligatoria para ahorrar y así uno no se gasta la plata en bobadas, ¿no?",
                                    "Si quisiera hacerla debo pedir un valor de cuota mensual. Si en promedio mis utilidades son de $1.500.000, pero tengo meses malos que solo me dejan $500.000 y unos muy buenos que dejan $5.000.000 ¿qué cuota debería pedir? "
                                ]
                            }
                        ],
                        options: [
                            { option: "A", id: "1.2.1.1.1" },
                            { option: "B", id: "1.2.1.1.2" },
                            { option: "C", id: "1.2.1.1.3" }
                        ]
                    }
                },
    // 2
        {
            id: "2",
            type: "buena",
            desc: "¡Está bien! Me alegra que ya esté organizado, don Alfonso. Para lograr los objetivos de crecimiento, como abrir este mega taller, es importante definir una meta clara de ahorro mensual basado en sus ingresos y costos. Defina muy bien los costos que son 100 % necesarios, luego defina una cuota de ahorro y haga todo lo posible por mantenerla.",
            feedback: "Organizarse financieramente incluye ser capaz de definir los valores de ahorro antes de gastar el dinero en otras cosas. Muchas personas lo hacen al revés y primero gastan todo lo que pueden y si sobra algo lo ahorran.",
            answer: {
                pages: [
                    {
                        desc: "¡Claro! Siempre que me proponía ahorrar con lo que me sobraba del mes, nunca sobraba nada. Voy a empezar a separar el ahorro mensual de forma sagrada.",
                        question: "¿Dónde debería guardarlo?"
                    }
                ],
                options: [
                    { option: "A", id: "1.2.1" },
                    { option: "B", id: "1.2.2" },
                    { option: "C", id: "1.2.3" }
                ]
            }
        },
    // 3
        {
            id: "3",
            type: "neutral",
            desc: "Primero lo primero. Pague todos los gastos y costos de la empresa y los personales, y si le llega a sobrar algo de plata, guárdela en algún lugar seguro. ",
            feedback: "Si bien gastar menos de lo que gana es el hábito que debemos cuidar, el ahorro es más efectivo cuando es intencionado. Es mejor definir bien los presupuestos mensuales y destinar unos valores mínimos de ahorro, y no ahorrar solo lo que sobra",
            answer: {
                pages: [
                    {
                        desc: "Don Alfonso siguió tu consejo, pero al no definir una meta clara, todos los meses se gastaba los excedentes en gastos varios y, por no haber ahorrado, nunca pudo abrir su mega taller."
                    }
                ],
                end: true
            }
        }
    ]
}

export default HistoryDonAlfonso;