import { useEffect, useState } from 'react';
import { contactsData } from '../data/contactsData';

function UseRepo() {
  const [repos, setRepos] = useState([]);
  const { devUsername } = contactsData;

  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=user:DhavalGohel&sort=stars&type=Repositories`)
      .then((response) => response.json())
      .then(data => {
        setRepos(data)
      })
  }, [devUsername]);

  return { blogs: repos };
};

export default UseRepo;