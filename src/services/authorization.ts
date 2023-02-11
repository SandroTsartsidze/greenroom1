export let authorization = {
    signup: {
        startup: [
            {
                title: "tell us about your startup",
                description: "random text",
                fields: [
                    {
                        required: true,
                        title: "startup name",
                        description: "it is important to choose your startup carefully",
                        placeholder: "fill in startup name",
                        type: "text",
                        validation: {
                            regex: "[b-chm-pP]at|ot",
                            message: "password must contain 8 characters"
                        }
                    },
                    {
                        required: false,
                        title: "Country",
                        type: "select",
                        options: [
                            {
                                value: 1,
                                name: "Georgia"
                            },
                            {
                                value: 2,
                                name: "malta"
                            }
                        ]
                    },
                    {
                        required: false,
                        title: "Investors",
                        type: "multiple",
                        content: [
                            {
                                title: "startup name",
                                description: "it is important to choose your startup carefully",
                                placeholder: "fill in startup name",
                                type: "input",
                                validation: {
                                    regex: "[b-chm-pP]at|ot",
                                    message: "password must contain 8 characters"
                                }
                            },
                        ]
                    },
                ]
            }
        ],
        investor: []
    },
    login: {

    }
}