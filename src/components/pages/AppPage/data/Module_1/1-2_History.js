const HistoryDonAlfonso = {
    id: "1-2",
    cover: 'bg-mechanics',
    title: 'history-2',
    personage: "don alfonso",
    desc: "Don Alfonso es dueño de un taller de mecánica hace varios años. Entró al curso de Educación Financiera para MiPymes para mejorar sus habilidades empresariales y le ha servido bastante, pero ahora necesita tu ayuda. Aunque trabaja mucho y gana más de lo que se gasta, al final del mes no ve los excedentes. ¿Le puedes ayudar?",
    ptsMax: 11,
    answer: {
        pages: [
            {
                desc: [
                    "Sumercé, buenas tardes.",
                    "    ‎",
                    "Imagínese que durante los últimos años mi tallercito ha ido creciendo y tengo clientes fieles. Todos pagan en efectivo porque saben que a mí eso de la tecnología se me dificulta.",
                ],
            },
            {
                desc: [
                    "Sin embargo, por más que sienta que vendo más, al final del mes ya no tengo plata en la caja registradora.", 
                    "    ‎",
                    "Yo soy el único que tiene acceso al dinero en el taller.",
                ],
                question: "¿Qué puede estar pasando?"
            }
        ],
        options: [ 
            { option: "A", id: '1'},
            { option: "B", id: '2'},
            { option: "C", id: '3'}
        ]
    },
    listOptions: [
// 1
    {
        id: "1",
        type: "neutral",
        desc: "Don Alfonso, lo primero que podría hacer es organizarse y no sacar la plata del taller para sus gastos personales. Así podremos saber si realmente el taller está generando utilidad o no.",
        feedback: [
                "Has tomado una decisión lógica, sin embargo, sabemos que para lograrlo se requiere de tiempo y constancia.",
                "    ‎",
                "También es importante incentivar el control de los gastos para saber cómo se usan los ingresos.",
            ],
        answer: {
            personageAction: 'ok',
            pages: [
                {
                    desc: [
                        "¡Gracias!",
                        "    ‎",
                        "Me he tomado mi tiempo organizando las cuentas, gracias a eso me di cuenta que me estoy gastando la plata en bobadas, cuando en verdad me podría alcanzar para abrir un nuevo taller.",
                ],
                    question: "¿Qué debería hacer?"
                }
            ],
            options: [
                { option: "A", id: '1.1'},
                { option: "B", id: '1.2'},
            ]
        }
    },
    // 1.1
        {
            id: "1.1",
            type: "buena",
            desc: "Primero, revisemos la estructura de costos del negocio actual.",
            feedback: [
                    "¡Muy bien!",
                    "    ‎",
                    "Analizar el detalle del negocio te permitirá identificar variaciones en los costos que podrían cambiar las proyecciones de ventas esperadas.",
                    "    ‎",
                    "Cada negocio tiene sus particularidades y como tal, no podemos tomar decisiones desde las generalidades.",
                    ],
            answer: {
                pages: [
                    {
                        table: {
                            title: [
                                    'El taller tiene los siguientes costos:',
                                    "    ‎",
                                    ],

                            columns: [
                                { key: 'description', label: 'descripción' },
                                { key: 'value', label: 'valor' }
                            ],
                            values: [
                                {
                                   description: 'Mano de obra',
                                   value: '$5.000.000'
                                },
                                {
                                    description: 'Salario gerente',
                                    value: '$5.000.000'
                                },
                                {
                                    description: 'Materiales y herramientas',
                                    value: '$2.000.000'
                                },
                                {
                                    description: 'Alquiler de maquinaria',
                                    value: '$5.000.000'
                                }
                            ]
                        },
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
                type: "mala",
                desc: "Si cree que puede prestar servicios por más de $17.000.000 mensuales, debería abrir otro local.",
                feedback: [
                        "Hay que revisar con cuidado cada proyecto. A veces nos falta tener en cuenta algunos costos. ",
                        "    ‎",
                        "En este caso, no se tomó en cuenta que se debe pagar un arriendo para el nuevo local, lo que hace que los $17.000.000 de ventas no sean suficientes para pagar los costos.",
                ],
                answer: {
                    pages: [
                        {
                            desc: [
                                "¡Un momento!", 
                                "Casi cometo una imprudencia.",
                                "    ‎",
                                "No estoy contando el arriendo del local. Como el que tengo ahora está debajo de mi casa, nunca lo he contemplado en los costos",
                                "    ‎",
                                "Tampoco estoy contemplando cuánto me puede costar la adecuación inicial, ni el incremento en mi salario al tener un nuevo taller.",
                            ],
                            question: "Debo tener en cuenta todos estos gastos antes de tomar la decisión."
                        },
                        {
                            table: {
                                title: 'Haciendo bien los cálculos de los gastos, la tabla de costos quedaría así:',
                                columns: [
                                    { key: 'description', label: 'descripción' },
                                    { key: 'value', label: 'valor' }
                                ],
                                values: [
                                    {
                                       description: 'Mano de Obra',
                                       value: '$5.000.000'
                                    },
                                    {
                                        description: 'Salario Gerente 50%',
                                        value: '$3.500.000 (Cada taller paga 50% del nuevo salario)'
                                    },
                                    {
                                        description: 'Materiales y Herramientas',
                                        value: '$2.000.000'
                                    },
                                    {
                                        description: 'Alquiler de Maquinaria',
                                        value: '$5.000.000'
                                    },
                                    {
                                        description: 'Servicios',
                                        value: '$1.000.000'
                                    },
                                    {
                                        description: 'Arriendo',
                                        value: '$2.500.000'
                                    },
                                    {
                                        description: 'Adecuación Inicial, una sola vez.',
                                        value: '$4.000.000'
                                    },
                                ]
                            }
                        },
                        {
                            desc: "Estimamos estar vendiendo un mínimo de $21.000.000 mensuales y un promedio de $23.000.000.",
                            question: "¿Debería intentarlo?"
                        }
                    ],
                    options: [
                        { option: "A", id: "1.1.1.1" },
                        { option: "B", id: "1.1.1.2" }
                    ]
                }
            },
                //1.1.1.1
                {
                    id: "1.1.1.1",
                    type: "mala",
                    desc: "No. Sus gastos son $23.000.000, si presta servicios por $21.000.000 mensuales iría a pérdida.",
                    feedback: [
                        "La adecuación del local es un gasto de una sola vez.",
                        "    ‎",
                        "Los gastos mensuales son en promedio $19.000.000, y la proyección mínima de ventas es de $21.000.000.",
                        "    ‎",
                        "Por no tener claridad en los gastos podemos estar perdiendo oportunidades de negocio o adentrarnos en negocios poco rentables.",
                    ],
                    answer: {
                        feedback: [
                            "Don Alfonso decidió seguir tu consejo y no invertir en su nuevo taller.",
                            "    ‎",
                            "Le daba miedo no superar los $23.000.000 que necesitaba, como mínimo, para superar los costos.", 
                            "Tiempo después, se dio cuenta de que los costos eran solo de $19.000.000 y que habria sido un buen negocio haber abierto el nuevo taller.",
                        ],
                        end: true
                    },
                },
                //1.1.1.2
                {
                    id: "1.1.1.2",
                    type: "buena",
                    desc: "¡Sí! Los números dan. Tenga en cuenta que será mucho trabajo, pero esa es la forma de alcanzar el éxito.",
                    feedback: [
                            "Los costos directos e indirectos son de $19.000.000 y las proyecciones muestran un mínimo de facturación de $21.000.000.",
                            "    ‎",
                            "Esto significa que el negocio podría generar utilidad. El objetivo es encontrar negocios con utilidades altas que puedan absorver los imprevistos o meses de poca facturación.",
                    ],
                    answer: {
                        feedback: [
                            "Gracias a tus consejos, Don Alfonso está mejor que nunca.", 
                            "    ‎",
                            "Su nuevo taller ha sido todo un éxito y no solo fue capaz de pagar todos los costos y la adecuación inicial, sino que ya está pensando en crecer por todo el país.", 
                            "    ‎",
                            "Cada vez está más cerca de cumplir su sueño gracias a tu ayuda.",
                        ],
                        end: true
                    },
                },
            //1.1.2
            {
                id: "1.1.2",
                type: "buena",
                desc: "Que estos sean los costos del taller actualmente no significa que el otro taller sea igual. Hagamos un análisis detallado",
                feedback: [
                        "¡Muy bien!",
                        "    ‎",
                        "Identificar que cada local, o cada proyecto debe revisarse al detalle es vital para no tomar una decisión desfaborable.",
                        "    ‎",
                        "En este caso no se está tomando en cuenta el costo del alquiler del local, lo que puede hacer entender que los costos de operación son solo de $17.000.000 cuando realmente serían más altos.",
                        ],
                answer: {
                    pages: [
                        {
                            desc: ["Tiene razón.", 
                            "    ‎",
                            "El taller que tengo está debajo de mi casa y no tengo que pagar arriendo.",
                            "Debería agregar el precio del arriendo, la adecuación inicial y claramente un incremento en mi salario",
                        ],
                            question: "¡Casi tomo una decisión acelerada!"
                        },
                        {
                            table: {
                                title: 'Haciendo bien los cálculos de los gastos, la tabla de costos quedaría así',
                                columns: [
                                    { key: 'description', label: 'descripción' },
                                    { key: 'value', label: 'valor' }
                                ],
                                values: [
                                    {
                                       description: 'Mano de obra',
                                       value: '$5.000.000'
                                    },
                                    {
                                        description: 'Salario gerente 50%',
                                        value: '$3.500.000 (Cada taller paga 50% del nuevo salario)'
                                    },
                                    {
                                        description: 'Materiales y herramientas',
                                        value: '$2.000.000'
                                    },
                                    {
                                        description: 'Alquiler de maquinaria',
                                        value: '$5.000.000'
                                    },
                                    {
                                        description: 'Servicios',
                                        value: '$1.000.000'
                                    },
                                    {
                                        description: 'Arriendo',
                                        value: '$2.500.000'
                                    },
                                    {
                                        description: 'Adecuación Inicial',
                                        value: '$4.000.000, una sola vez.'
                                    },
                                ]
                            }
                        },
                        {
                            desc: "Estimamos estar vendiendo un mínimo de $21.000.000 mensuales y un promedio de $23.000.000.",
                            question: "¿Debería intentarlo?"
                        }
                    ],
                    options: [
                        { option: "A", id: "1.1.1.1" },
                        { option: "B", id: "1.1.1.2" }
                    ]
                }
            },
        // 1.2
            {
                id: "1.2",
                type: "neutral",
                desc: "Si este negocio le da plata, puede montar otro igualito sin problema. ",
                feedback: [
                    "Utilizar los valores históricos del taller para sacar las cuentas de uno nuevo no te ahorrará trabajo.",
                    "    ‎",
                    "Cada negocio tiene sus particularidades, las cuales debes revisar en detalle para no proyectar costos erróneos.",
             
                ],
                answer: {
                    personageAction: 'upset',
                    pages: [
                        {
                            desc: [
                                "No podría montarlo igualito.", 
                                "    ‎",
                                "El nuevo taller será un poco más pequeño que el que tengo actualmente, seguramente los gastos van variar.",
                                "Por ejemplo, debo cotizar la adecuación inicial del taller y subir mi salario, así, cada local pagará una parte del mismo",
                                "    ‎",
                                "Tengo proyectada la siguiente tabla de costos: ",
                            ],
                            
                        },
                        {
                            table: {
                                title: 'El taller tiene los siguientes costos',
                                columns: [
                                    { key: 'description', label: 'descripción' },
                                    { key: 'value', label: 'valor' }
                                ],  
                                values: [
                                    {
                                       description: 'Mano de obra',
                                       value: '$5.000.000'
                                    },
                                    {
                                        description: 'Salario gerente 50%',
                                        value: '$3.500.000, (Cada taller paga el 50% del nuevo salario)'                                        
                                    },
                                    {
                                        description: "Materiales y herramientas",
                                        value: "$2.000.000"
                                    },
                                    {
                                        description: "Alquiler de maquinaria",
                                        value: "$5.000.000"
                                    },

                                    {
                                        description: "Servicios",
                                        value: "$1.000.000"
                                    },
                                    {
                                        description: "Arriendo",
                                        value: "$2.500.000"
                                    },
                                    {
                                        description: "Adecuación Inicial",
                                        value: "$4.000.000 000, una sola vez. "
                                    }
                                ]                              
                            }
                        },
                        {
                            question: "Estimamos estar vendiendo un mínimo de $21.000.000 mensuales y un promedio de $23.000.000. ¿debería intentarlo?"
                        }
                    ],
                    options: [
                        { option: "A", id: "1.1.1.1" },
                        { option: "B", id: "1.1.1.2" }
                    ]
                }
            },
// 2
    {
        id: "2",
        type: "buena",
        desc: "Montar un sistema de ingresos y gastos le dará tranquilidad al saber cuánto dinero entró y cuánto salió en el día. Además, ingresar el dinero en una cuenta de ahorros permitirá tener mejor control de la salida de efectivo.",
        feedback: [
                    "¡Muy bien!",
                    "    ‎",
                    "Es importante tener registrado todos los ingresos y todos los gastos, en lo posible, de forma diaria para que sea fácil de analizar la información.",
                    "    ‎",
                    "Se puede hacer de forma manual pero mejor si se hace en un computador o un sistema para optimizar el tiempo y manejar un número más grande de transacciones.",
                    ],
        answer: {
            pages: [
                {
                    desc: [
                        "¡Muchas gracias!",
                        "    ‎",
                        "Entonces empezaré anotando todos los ingresos diarios y en qué me los gasto.", 
                        "También iré al banco a ver cómo es eso de tener la plata en una cuenta de ahorros. "
                    ],
                    }
            ],
            options: [
                { option: "A", id: "2.1"},
                { option: "B", id: "2.2"},
                { option: "C", id: "2.3"}
            ]
        }
    },
        // 2.1
        {
            id: '2.1',
            type: "mala",
            desc: "Una sola cuenta para usted y el negocio para ahorrar en gastos financieros.",
            feedback: [
                    "Elegir ahorrar en gastos financieros uniendo la cuenta personal y empresarial no es un buen consejo",
                    "    ‎",
                    "Los costos bancarios son mínimos en comparación del desgaste operativo que generan las cuentas compartidas.",
                    ],

            answer: {
                pages: [
                    {
                        desc: [
                            "En el curso de Educación Financiera para MiPymes hacían mucho énfasis en separar las cuentas personales y las del negocio.", 
                            "Creo que es exactamente lo que necesito para empezar a organizarme ya que quiero abrir otro taller.",
                        ],
                        question: "¿Qué debería hacer primero?"
                    }
                ],
                options: [
                    { option: "A", id: '1.1'},
                    { option: "B", id: '1.2'},
                ]
            }
        },
        // 2.2
        {
            id: '2.2',
            type: "neutral",
            desc: "Abra una cuenta de ahorros para manejar el dinero del taller y solicite un datáfono para recibir pagos electrónicos.",
            feedback: [
                "Llevar las cuentas del negocio en una cuenta ayuda a identificar más fácil en qué se gasta el dinero.",
                "    ‎",
                "Por otro lado, los datáfonos ayudan a incrementar las ventas.",
                ],
            answer: {
                pages: [
                    {
                        desc: [
                            "¡Gracias!",
                            "    ‎",
                            "Con esa nueva metodología me di cuenta de que me estaba gastando la plata del taller en bobadas. Definitivamente tengo un buen negocio y ahora quiero abrir otro taller en otro barrio de la ciudad.",
                         ],
                        question: "¿Qué debería hacer?"
                    }
                ],
                options: [
                    { option: "A", id: '1.1'},
                    { option: "B", id: '1.2'},
                ]
            }
        },
        // 2.3
        {
            id: '2.3',
            type: "buena",
            desc: "Abra una cuenta para usted y otra para el taller. Sí, puede costar más, pero es mejor no revolver cuentas. También pida un datáfono para recibir pagos electrónicos.",
            feedback: [
                    "¡Muy bien!",
                    "    ‎",
                    "Tener las cuentas del hogar y del negocio de manera separada y además en un banco, ayudarán a identificar más fácil la fecha y el monto de los gastos.",
                    "¡Es importante llevar un registro de estas cuentas!",
                    "    ‎",
                    "Por otro lado, los datáfonos ayudarán a incrementar tus ventas.",
                    ],
                    answer: {
                pages: [
                    {
                        desc: [
                                "¡Gracias!",
                                "    ‎",
                                "Me he tomado mi tiempo organizando las cuentas, gracias a eso me di cuenta que me estoy gastando la plata en bobadas, cuando en verdad me podría alcanzar para abrir un nuevo taller.",
                        ],
                        question: "¿Qué debería hacer?"
                    }
                ],
                options: [
                    { option: "A", id: '1.1'},
                    { option: "B", id: '1.2'},
                ]
            }
        },
// 3
    {
        id: "3",
        type: "neutral",
        desc: "Don Alfonso, ha llegado la hora de empezar a recibir tarjeta débito. Es más fácil seguir los ingresos y gastos si están en formato digital.",
        feedback: [
                "Efectivamente tu negocio te permite recibir efectivo y pagos digitales, que los empieces a usar habla muy bien del mismo", 
                "    ‎",
                "Pero no olvides, se debe llevar un registro de las cuentas.",
                ],

        answer: {
            pages: [
                {
                    desc: [
                        "¡Uy! Sabía que tarde o temprano tendría que empezar a utilizar estas herramientas.",
                        "    ‎",
                        "Bueno, que mejor momento que el presente para hacerlo. ¿No?",
                        "    ‎",
                        "Iré al banco inmediatamente.",
                    ],
                    question: "¿Qué debería sacar?"
                }
            ],
            options: [
                { option: "A", id: "2.1"},
                { option: "B", id: "2.2"},
                { option: "C", id: "2.3"}
            ]
        }
    }
]
}


export default HistoryDonAlfonso;


// {
//     table: {
//         title: '',
//         columns: [
//             { key: 'description', label: 'descripción' },
//             { key: 'value', label: 'valor' }
//         ],
//         values: [
//             {
//                description: '',
//                value: ''
//             },
//             {
//                 description: '',
//                 value: ''
//             },
//         ]
//     }
// },