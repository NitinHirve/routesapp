export const users = [

    {
        name: 'John McClane',
        flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/gb.svg',
        account_no: '****1234',
        amount: '1,500.00 GBP',
        status: 'in progress',
        topMessage: 'In progress',

        timeline: [
            {
                avail: true,
                name: 'Instruction',
                msg: 'Payment created',
                status: 'success',
                dateflow: [
                    '23/01/2019 Payment instruction created',
                    '28/02/2019 FX ticket will be executed and funds added to wallet'
                ]

            },
            {
                avail: true,
                name: 'FX Deal',
                msg: 'Awaiting funds',
                status: 'success',
                dateflow: [
                    '23/01/2019 Payment instruction created',
                    '28/02/2019 FX ticket will be executed and funds added to wallet'
                ]

            },
            {
                avail: true,
                name: 'Initiated',
                msg: 'Payment is ready to sent out',
                status: 'success',
                dateflow: [
                    '23/01/2019 Payment instruction created',
                    '28/02/2019 FX ticket will be executed and funds added to wallet'
                ]

            },
            {
                avail: true,
                name: 'Accepted',
                msg: 'Payment accepted by bank',
                status: 'active',
                dateflow: [
                    '23/01/2019 Payment instruction created',
                    '28/02/2019 FX ticket will be executed and funds added to wallet'
                ]

            },
            {
                avail: true,
                name: 'Completed',
                msg: 'Pending',
                status: 'pending',
                dateflow: []

            }

        ],

        paymentDetails: {
            paymentMethod: 'Bank transfer',
            customerReference: '277963-055A1',
            paymentReference: '321321-321231-3212313',
            country: 'United Kingdom',
            accountNumber: '0700 9312 3456 78',
            sortCode: '20-20-20',
        }

    },




    {
        name: 'Jack Bauer',
        flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/au.svg',
        account_no: '****1234',
        amount: '1,000.00 AUD',
        status: 'rejected',
        topMessage: 'Payment was rejected by bank',

        timeline: [
            {
                avail: true,
                name: 'Instruction',
                msg: 'Payment created',
                status: 'success',
                dateflow: [
                    '23/01/2019 Payment instruction created',
                    '28/02/2019 FX ticket will be executed and funds added to wallet'
                ]

            },
            {
                avail: true,
                name: 'FX Deal',
                msg: 'Awaiting funds',
                status: 'success',
                dateflow: [
                    '23/01/2019 Payment instruction created'
                ]

            },
            {
                avail: true,
                name: 'Initiated',
                msg: 'Payment is ready to sent out',
                status: 'success',
                dateflow: [
                    '23/01/2019 Payment instruction created',
                    '28/02/2019 FX ticket will be executed and funds added to wallet'
                ]

            },
            {
                avail: true,
                name: 'Rejected',
                msg: 'Payment rejected by bank',
                status: 'rejected',
                dateflow: [
                    '23/01/2019 Payment rejected by bank',
                ]

            },
            {
                avail: false,
                name: '',
                msg: '',
                status: '',
                dateflow: []

            }

        ],

        paymentDetails: {
            paymentMethod: 'Bank transfer',
            customerReference: '277963-055A1',
            paymentReference: '321321-321231-3212313',
            country: 'United Kingdom',
            accountNumber: '0700 9312 3456 78',
            sortCode: '10-10-10',
        }

    },




    {
        name: 'Luke Vader',
        flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/eu.svg',
        account_no: '****1234',
        amount: '5,000.00 EUR',
        status: 'success',
        topMessage: 'Payment settled',

        timeline: [
            {
                avail: true,
                name: 'Instruction',
                msg: 'Payment created',
                status: 'success',
                dateflow: [
                    '23/01/2019 Payment instruction created',
                    '28/02/2019 FX ticket will be executed and funds added to wallet'
                ]

            },
            {
                avail: true,
                name: 'FX Deal',
                msg: 'Awaiting funds',
                status: 'success',
                dateflow: [
                    '23/01/2019 Payment instruction created',
                    '28/02/2019 FX ticket will be executed and funds added to wallet'
                ]

            },
            {
                avail: true,
                name: 'Initiated',
                msg: 'Payment is ready to sent out',
                status: 'success',
                dateflow: [
                    '23/01/2019 Payment instruction created',
                    '28/02/2019 FX ticket will be executed and funds added to wallet'
                ]

            },
            {
                avail: true,
                name: 'Accepted',
                msg: 'Payment accepted by bank',
                status: 'success',
                dateflow: [
                    '23/01/2019 Payment instruction created',
                    '28/02/2019 FX ticket will be executed and funds added to wallet'
                ]

            },
            {
                avail: true,
                name: 'Completed',
                msg: 'Payment settled',
                status: 'success',
                dateflow: ['23/01/2019 Payment was completed']

            }

        ],

        paymentDetails: {
            paymentMethod: 'Bank transfer',
            customerReference: '277963-055A1',
            paymentReference: '321321-321231-3212313',
            country: 'United Kingdom',
            accountNumber: '0700 9312 3456 78',
            sortCode: '20-20-20',
        }

    },


]