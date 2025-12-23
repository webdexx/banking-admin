export const createSearchSlice = (set, get) => ({
  search: (query) => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();
 
    const { users = [], accounts = [] } = get();

    const userResults = users
      .filter(
        (u) =>
          u.firstName.toLowerCase().includes(q) ||
          u.lastName.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q)
      )
      .map((u) => ({
        id: u._id,
        title: `${u.firstName} ${u.lastName}`,
        subtitle: u.email,
        type: "user",
        route: `/admin/users/${u._id}`,
      }));

    const accountResults = accounts
      .filter(
        (a) =>
          a.accountNumber.includes(q) ||
          `${a.user.firstName} ${a.user.lastName}`
            .toLowerCase()
            .includes(q)
      )
      .map((a) => ({
        id: a._id,
        title: a.accountNumber,
        subtitle: `${a.user.firstName} ${a.user.lastName}`,
        type: "account",
        route: `/admin/accounts/${a._id}`,
      }));

    return [...userResults, ...accountResults].slice(0, 8); // limit results
  },
});
