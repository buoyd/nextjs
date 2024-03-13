import { fetchFilteredCustomers } from '@/app/lib/data';
import { CustomersTableType } from '@/app/lib/definitions';
import CustomersTable from './table';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers: CustomersTableType[] = await fetchFilteredCustomers(query);

  return <CustomersTable customers={customers}></CustomersTable>;
}
