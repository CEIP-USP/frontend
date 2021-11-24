import React, { FormEvent, useEffect, useRef, useState } from 'react';

import CardList from '../components/CardList';
import { CardProps } from '../components/Card';
import { RegistrationsQueryResponse } from '../services/registrations-query/query';
import SearchBar from '../components/SearchBar';
import { useRegistrationsQuery } from '../services/registrations-query/query-hook';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const Search: React.FC = () => {
  const query = useRegistrationsQuery();

  const [registrationsResponses, setRegistrationsResponses] = useState<
    RegistrationsQueryResponse[]
  >([]);
  const registrations = registrationsResponses
    ?.map((res) => res.data)
    .flat()
    .map(
      (reg) =>
        ({
          name: reg.name,
          email: reg.contact.email,
          phoneNumber: reg.contact.phone && reg.contact.phone[0],
          status: 'OK',
          statusColor: 'blue',
        } as CardProps)
    );

  const [searchTerm, setSearchTerm] = useState<string>('');
  const searchBarRef = useRef<HTMLInputElement>(null);
  const onSubmitSearchTerm = (evt: FormEvent) => {
    evt.preventDefault();
    setSearchTerm(searchBarRef.current?.value + '');
  };

  const defaultPageSize = 3;
  const [pageParams, setPageParams] = useState({
    page: 1,
    pageSize: defaultPageSize,
  });

  useEffect(() => {
    setRegistrationsResponses([]);
    setPageParams({ page: 1, pageSize: defaultPageSize });
  }, [searchTerm]);

  const doQuery = AwesomeDebouncePromise(() => {
    const { page, pageSize: _pageSize } = pageParams;
    return query({
      q: searchTerm + '',
      skip: (page - 1) * _pageSize,
      take: _pageSize,
    }).then((res) =>
      setRegistrationsResponses([...registrationsResponses, res])
    );
  }, 1000);

  useEffect(() => {
    doQuery();
  }, [pageParams]);

  const fetchMore = () => {
    setPageParams({ ...pageParams, page: pageParams.page + 1 });
  };

  return (
    <main className="bg-background-default min-h-screen">
      <div className="p-4 container mx-auto max-w-screen-md">
        <form className="mb-4" onSubmit={onSubmitSearchTerm}>
          <SearchBar
            onChange={(event) => setSearchTerm(event.target.value)}
            value={searchTerm}
          />
        </form>
        <CardList registrations={registrations} />
        <div className="flex items-center justify-center mt-4">
          <button
            className="px-4 py-2 bg-blue-300 rounded-md text-white"
            onClick={fetchMore}
          >
            Carregar mais
          </button>
        </div>
      </div>
    </main>
  );
};

export default Search;
