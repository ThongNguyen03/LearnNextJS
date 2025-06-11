import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers | Acme Dashboard',
  description: 'Manage your customers in the Acme Dashboard.',
};
export default function CustomersPage() {
  return (
    <div>
      <h1>Customers</h1>
        <p>Customers Page</p>
    </div>
  );
}
