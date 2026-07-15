function List(){

    const fruits=[ { id:1, name:"apple", calories: 95 },
        { id:2, name:"banana", calories: 105 },
        { id:3, name:"mango", calories: 200 },
        { id:4, name:"orange", calories: 130 },
        { id:5, name:"grapes", calories: 150 }];

        //sorting the fruits array based on calories in ascending order
        fruits.sort((a,b)=> a.calories - b.calories);//numeric  order
        fruits.sort((a,b) => b.calories - a.calories);//reverse numeric order
        fruits.sort((a,b) => a.name.localeCompare(b.name));//alphabetical order
        fruits.sort((a,b) => b.name.localeCompare(a.name));//reverse alphabetical order

    const listItems=fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}:&nbsp;
        {fruit.calories} calories</li>);

    return <ol><b>{listItems}</b></ol>;
}
export default List