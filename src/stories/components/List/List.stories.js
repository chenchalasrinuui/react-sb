
import { List } from "./List"

export default{
    title: 'components/List/List',
    component: List,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
}

export const WithData = {
    args: {
        data: ['Sachin', 'Dhoni', 'Kohli']
    }
}

export const Empty = {  
    args: {
        data: []
    }
}

