interface textType { 
    id: number
    info: string
}

interface descriptionType { 
    id: number
    title: string
    text: Array<textType>
}

export interface priceDataType {
    id: number
    category: string
    price: string
    info: string
    description:Array<descriptionType>
}

const priceData:Array<priceDataType> = [
    {
        id: 1,
        category: "Lite",
        price: "0",
        info: "Try Connect2HQ for Free!",
        description : [
            {
                id: 1,
                title: "For Single user",
                text: [
                    {
                        id: 1,
                        info: 'Up to 100 hours per month'
                    }
                ]
            },

            {
                id: 2,
                title: "1 Processor",
                text: [
                    {
                        id: 1,
                        info: '2 GB Memory'
                    },

                    {
                        id: 2,
                        info: '40 GB Storage'
                    }
                ]
            },

            {
                id: 3,
                title: "Applications (dropdown)",
                text: [
                    {
                        id: 1,
                        info: '- Chrome'
                    },

                    {
                        id: 2,
                        info: '- Calculator'
                    },

                    {
                        id: 3,
                        info: '- Email, Calendar, Contacts, Notes & Task'
                    },

                    {
                        id: 4,
                        info: '- LibreOffice'
                    },

                    {
                        id: 5,
                        info: '- PDF reader'
                    },

                    {
                        id: 6,
                        info: '- Media player'
                    },

                    {
                        id: 7,
                        info: '- Zoom'
                    },

                ]
            },
        ]
    },

    {
        id: 2,
        category: "Basic",
        price: "12",
        info: "Your personal cloud Desktop on browser. Connect from office, home or school for secured access instantly.",
        description : [
            {
                id: 1,
                title: "Unlimited users can share!",
                text: [
                    {
                        id: 1,
                        info: 'Up to 200 hours per month'
                    }
                ]
            },

            {
                id: 2,
                title: "1 Processor",
                text: [
                    {
                        id: 1,
                        info: '2 GB Memory'
                    },

                    {
                        id: 2,
                        info: '40 GB Storage'
                    },

                    {
                        id: 3,
                        info: 'Applications (same)'
                    }
                ]
            }
        ]
    },

    {
        id: 3,
        category: "Pro",
        price: "19",
        info: "A powerful cloud Desktop on browser for professionals.",
        description : [
            {
                id: 1,
                title: "Unlimited users can share!",
                text: [
                    {
                        id: 1,
                        info: 'Up to 200 hours per month'
                    }
                ]
            },

            {
                id: 2,
                title: "2 Processor",
                text: [
                    {
                        id: 1,
                        info: '4 GB Memory'
                    },

                    {
                        id: 2,
                        info: '80 GB Storage'
                    },

                    {
                        id: 3,
                        info: 'Applications (same)'
                    }
                ]
            }
        ]
    },
]

export default priceData