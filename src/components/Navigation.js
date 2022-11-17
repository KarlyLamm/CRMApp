import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const TabNavigator = createBottomTabNavigator(
    {
        People: PeopleList,
        Add: AddPerson,
        Company: CompanyList
    }
)