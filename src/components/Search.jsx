import React, {useState, useMemo} from 'react';
import ListItem from './ListItem';

export default function Search() {
  const users = [
    {id: 1, name: 'Lawson'},
    {id: 2, name: 'Jessica'},
  ];
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

  const handleQuery = e => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setSearch(query);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    // eslint-disable-next-line
    [search]
  );

  return (
    <div>
      <input type='text' value={query} onChange={handleQuery} />
      <button onClick={handleSearch}>Search</button>
      <ListItem list={filteredUsers} />
    </div>
  );
}
