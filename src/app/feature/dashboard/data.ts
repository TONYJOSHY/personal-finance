import { CardList } from "src/app/shared/models/card.interface";
import { Overview } from "src/app/shared/models/overview.interface";

export const CARD_LIST: CardList[] = [
    {
        name: 'Christina Mathew',
        number: '0123  4567  8910 1234',
        expiry: '07/25',
        image: 'assets/images/card1.svg'
    },
    {
        name: 'Christina Mathew',
        number: '0123  4567  8910 2345',
        expiry: '10/25',
        image: 'assets/images/card2.svg'
    },
    {
        name: 'Christina Mathew',
        number: '0123  4567  8910 3456',
        expiry: '06/25',
        image: 'assets/images/card3.svg'
    },
    {
        name: 'Christina Mathew',
        number: '0123  4567  8910 1239',
        expiry: '10/25',
        image: 'assets/images/card4.svg'
    },
]

export const OVERVIEW_LIST: Overview[] = [
    {
        title: 'Total balance',
        amount: 34500.98,
        change: 1.04,
        difference: "increment",
        cashFlow: "positive"
    },
    {
        title: 'Income',
        amount: 8000,
        change: 1.01,
        difference: "increment",
        cashFlow: "positive"
    },
    {
        title: 'Expense',
        amount: 1604,
        change: 3.55,
        difference: "decrement",
        cashFlow: "negative"
    },
    {
        title: 'Investment',
        amount: 34500.98,
        change: 1.04,
        difference: "increment",
        cashFlow: "negative"
    },
    {
        title: 'Mortages & loan',
        amount: 34500.98,
        change: 1.04,
        difference: "increment",
        cashFlow: "negative"
    }
]

