const getUserFromId = (id, user1, user2) => {
    return user1.id === id ? user1 : user2;
};
const getUserToId = (id, user1, user2) => {
    return user1.id === id ? user2 : user1;
};
export { getUserFromId, getUserToId };
