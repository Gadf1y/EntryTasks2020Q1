var model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]



function groupByName(elements) {

    let result = [];

    for (let item of elements) {
        let user = result.find(function (currentUser) { return currentUser.id === item.user.id });

        if (user) {
            user.posts.push({ id: item.id, title: item.title, text: item.text });
        } else {
            let user = { id: item.user.id, name: item.user.name, posts: [] };
            user.posts.push({ id: item.id, title: item.title, text: item.text });
            result.push(user);
        }
    }

    return result;
}

let result = groupByName(model);
console.log(result);

