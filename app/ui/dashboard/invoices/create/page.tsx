import { fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from '../breadcrumbs';
import Form from './create-form';

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/ui/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/ui/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
