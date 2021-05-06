const HistoryGloria = {
    id: "1-3",
    personage: "gloria",
    cover: 'bg-clothing',
    title: 'history-3',
    desc: "Gloria es una gran comerciante. Empezó como vendedora de ropa en un local en el centro de la ciudad hasta que se dio cuenta de que podía tener su propio local.  Después de haber hablado con diferentes proveedores, creó una tienda de ropa en el primer piso de su casa, pero no está segura de cuánto debe cobrarle a sus clientes. ¿Podrás ayudarle?",
    ptsMax: 9,
    answer: {
        pages: [
            {
                desc: [
                    "¡Hola! Soy Gloria.",
                    "    ‎",
                    "Muchas gracias por ayudarme en este gran sueño de montar mi propio negocio.",
                    "    ‎",
                    "Debo fijar los precios de manera correcta de mis prendas. No quiero cobrar de más, pero tampoco quiero ganar menos de lo que podría.", 
                    "    ‎",
                    "Durante los últimos meses he vendido en promedio 100 camisetas. A veces 80, a veces 120.",
                ],
                question: "¿Qué puedo hacer?"
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
        desc: "Bueno, lo primero que debemos hacer es saber cuánto nos cuesta todo. Cada centavo. Es un trabajo que toma tiempo, pero después me lo agradecerás. ",
        feedback: [
                "¡Muy bien!",
                "    ‎",
                "Cada negocio puede tener sus particularidades y basarnos en las generalidades puede hacernos caer en costos ocultos, lo que haría que la definición de precios no sea óptima y nos lleve a vender a perdida.",
        ],
        answer: {
            pages: [
                {
                    desc: "Bueno, actualmente estoy comprado y vendiendo camisetas. Por cada camiseta me cobran $25.000 y no tengo más costos."
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
            desc: "Listo. Ya sabiendo el costo la materia prima, solamente debemos sumar la utilidad que quieras ganar.",
            feedback: [
                        "El precio de la materia prima o la mercancía es solo el costo directo",
                        "    ‎",
                        "Recuerda que un negocio requiere pagar servicios, arriendo, salarios, y solo después de esto podemos sacar utilidad para el crecimiento de la empresa.",
            ],
            answer: {
                pages: [
                    {
                        desc: "¿Cuánto debería incrementarle?"
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
                type: "mala",
                desc: "Si valen $25.000 y las vendes en $100.000 sería un gran negocio.",
                feedback: [
                            "Estás vendiendo las camisetas más de 3 veces de lo que te cuestan, de pronto no estas siendo competitivo.",
                            "    ‎",
                            "Antes de fijar el precio debes sacar todos los costos y agregar la utilidad que deseas ganar.",
                            "    ‎",
                            "Aunque en este caso te alcanzaría para pagar tus costos y tener ganancia, es posible que tus ventas se vean disminuidas porque los clientes prefieran comprar en otra parte",
                            ],

                            answer: {
                    pages: [
                        {
                            desc: [
                                "¡No me está funcionando el precio que puse!",
                                "    ‎",
                                "Al empezar a cobrar tanto, mis clientes dejaron de comprar y ahora solo vendo unas 10 camisetas al mes.", 
                                "    ‎",
                                "No me alcanza para vivir. Debo volver a como estaba antes e intentarlo de nuevo con otro punto punto de vista."
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
                desc: "Si cobras 10% más, ya es ganancia. Es plata con la que no contabas, y vender barato te hace vender más. Si cobramos mucho, los clientes se van con la competencia. ",
                feedback: [
                            "¡Puedes hacerlo mejor!",
                            "    ‎",
                            "Parece que no has sacado todos los costos de tu negocio y que tus ganancias están un poco bajas.",
                            "    ‎",
                            "Recuerda que antes de fijar los precios debes revisar cuánto te cuesta mantener un negocio, además, una utilidad muy baja no te permitirá responder a imprevistos o hacer crecer tu negocio.",
                            ],
                answer: {
                    pages: [
                        {
                            desc: [
                                "Estoy vendiendo mucho más que antes, pero no sé a dónde se va la plata.",
                                "    ‎",
                                "Se suponía que tendría utilidades del 10%, pero después de pagar la gasolina, los servicios y el arriendo, no me queda nada.",
                                "¡Creo que no es tan buen negocio!",
                                "    ‎",
                                "Definitivamente se debe hacer costeo antes de fijar el precio.",
                            ],
                        }
                    ],
                    end: true
                }
            },
        // 1.1.3
            {
                id: "1.1.3",
                type: "neutral",
                desc: "Creo que cobrar $60.000 podría ser una buena opción.",
                feedback: [
                    "Entre las opciones propuestas has escogido la mejor, sin embargo, recuerda que el precio se fija después de haber revisado los costos directos e indirectos así como la utilidad deseada.",
                    "    ‎",
                    "¡No olvides!",
                    "    ‎",
                    "Una utilidad muy baja no te permitirá responder a imprevistos o hacer crecer tu negocio, y una muy alta, hará que el precio no sea atractivo frente a tu competencia y posiblemente hará que tus ventas disminuyan.",
                    ],
                answer: {
                    pages: [
                        {
                            desc: [
                                "Creo que puede servir.", 
                                "    ‎",
                                "Voy a revisar cómo se sacan los costos directos e indirectos de mi negocio y la utilidad que estoy ganando.",
                                "    ‎",
                                "Así podré estar segura que el precio que puse es el mejor para mi negocio.",
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
            desc: "Me acabas de dar los costos directos. Recuerda que también existen los costos indirectos, como el transporte o tu salario como gerente.",
            feedback: [
                "El precio de la materia prima o la mercancía es solo el costo directo",
                "    ‎",
                "Recuerda que un negocio requiere pagar servicios, arriendo, salarios, y solo después de esto podemos sacar utilidad para el crecimiento de la empresa.",
    ],
            answer: {
                pages: [
                    {
                        desc: "Tienes razón. Yo necesito para vivir al menos $2.000.000 mensuales y en transporte me estoy gastando $500.000. El arriendo del primer piso vale $500.000. En total mis gastos indirectos serían $3.000.000 y mis gastos directos serían $25.000 por camiseta.",
                        question: "¿Cierto?"
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
            desc: "Listo. Si en promedio estás vendiendo 100 unidades, y tus costos indirectos son $3.000.000, significa que la utilidad mínima por camiseta debe ser de $30.000. Es decir, puedes venderlas a $55.000.",
            feedback: [
                        "Al elegir vender las camisetas a $55.000 vendiendo 100 unidades mensuales unicamente estarás cubriendo los costos directos e indirectos.",
                        "    ‎",
                        "No estás ganando utilidad y no podrás crecer tu negocio",
                    ],
            answer: {
                pages: [
                    {
                        desc: [
                            "Vender a un precio tan bajo no me está funcionando.",
                            "    ‎",
                            "He tenido unos meses con bajas ventas y no he podido pagar el arriendo. No puedo continuar así.",
                            "Debe haber otra forma de abordar mi negocio"
                        ],
                    }
                ],
                end: true
            }
        },
        // 1.2.2
        {
            id: "1.2.2",
            type: "buena",
            desc: "Listo. Si en promedio estás vendiendo 100 unidades, y tus costos indirectos son $3.000.000, el costo de tu producto es de $55.000. Ahora debemos agregar la utilidad que quisieras ganar. Recuerda que no puede ser muy grande para que las ventas no se caigan.",
            feedback: [
                        "Es importante saber la cantidad de unidades vendidas y distribuir los costos indirectos en esas unidades para saber cual es el costo real de cada producto.",
                        "    ‎",
                        "Ahora si después de tener este valor podrás elegir la utilidad esperada por producto.",
            ],
            answer: {
                pages: [
                    {
                        desc: [
                            "¡Ahora todo tiene sentido!",
                            "    ‎",
                            "Si con ese valor aseguro mi salario y mis costos, ahora el valor adicional entra como utilidad.",
                            "Así el negocio tiene muy buen futuro",
                        ],
                    }
                ],
                end: true
            }
        },
        // 1.2.3
        {
            id: "1.2.3",
            type: "mala",
            desc: "Listo. Si en promedio estás vendiendo 100 unidades, y tus costos indirectos son $3.000.000, deberías al menos duplicar ese valor. Es decir, deberías vender cada camiseta en $105.000 .",
            feedback: [
                        "La definición de precio debe ser analizada al detalle.",
                        "    ‎",
                        "A veces, por no tener la información clara, aumentamos de más el precio de mercado y perdemos competitividad, lo que puede llevarnos a una disminución significativa de ventas.",
            ],
                        answer: {
                pages: [
                    {
                        desc: [
                                "¡Iba muy bien!",
                                "    ‎",
                                "Pero se me olvidó sacar los costos directos de mi negocio y fijé un precio que estaba muy por encima de mis competidores...",
                                "    ‎",
                                "Ahora ya no vendo lo suficiente y creo que debo cerrar mi negocio",
                            ],  
                    }
                ],
                end: true
            }
        },
    // 1.3
        {
            id: "1.3",
            type: "mala",
            desc: "¡Piensa en grande! Agrega arriendo, un contador, dos vendedores, alquila un carro para llevar la prendas, y un par de modelos. Así venderás todo más rápido.",
            feedback: [
                        "Los costos directos e indirectos deben ser lo más real posible y mantenerlos lo mas bajo posible para lograr precios competitivos.",
                        "    ‎",
                        "Subir los costos para subir el precio de forma racional debe ir acompañado de un gran valor agregado que el cliente esté dispuesto a pagar.",
                        "    ‎",
                        "Solo debes contemplar incrementar los costos si al hacerlo puedes incrementar las ventas.",
            ],
            answer: {
                pages: [
                    {
                        desc: "¡No puedo agregar todo eso! No tengo forma de pagarlo. Solo puedo agregar un mínimo que necesito para vivir de $2.000.000, $500.000 del arriendo y $500.000 de transporte. "
                    }
                ],
                options: [
                    { option: "A", id: "1.2.1" },
                    { option: "B", id: "1.2.2" },
                ],
            }

        },
// 2
    {
        id: "2",
        type: "neutral",
        desc: "Eso es fácil. Compras tu mercancía e incrementas el valor por lo que quieras ganarte.  La clave es: comprar barato y cobrar caro.",
        feedback: [
                    "Comprar barato y vender caro es una forma simple de hacer negocios.",
                    "    ‎",
                    "Es mejor si sacas lo costos directos e indirectos y luego fijas cuánto podrías poner de utilidad, siempre siendo competitivos.",
        ],
        answer: {
            pages: [
                {
                    desc: "Es una gran idea. Yo compro las camisetas en $25.000 y he logrado venderlas hasta en $80.000."
                }
            ],
            options: [
                { option: "A", id: "1.1.1" },
                { option: "B", id: "1.1.2" },
                { option: "C", id: "1.1.3" }
            ]
        }
    },
// 3
    {
        id: "3",
        type: "mala",
        desc: "Lo más fácil es buscar en Google y poner el precio promedio de lo que veas similar. No te preocupes por calidad, al final todo es lo mismo. ",
        feedback: [
                    "Basarse en los precios base del mercado es una buena opción para entender qué rangos se están manejando, pero si no se complementa con una revisión de los costos directos e indirectos de tu negocio, podrías estar vendiendo por debajo de los costos de producción, o definiendo un precio poco competitivo.",
                    "    ‎",
                    "Esto podría llevarte a la quiebra o a perder ventas.",
        ],
        answer: {
            pages: [
                {
                    desc: "Es una gran idea. Yo compro las camisetas en $25.000 y he logrado venderlas hasta en $80.000."
                }
            ],
            options: [
                { option: "A", id: "1.1.1" },
                { option: "B", id: "1.1.2" },
                { option: "C", id: "1.1.3" }
            ]
        }
    }
]
}

export default HistoryGloria;