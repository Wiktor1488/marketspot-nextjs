import Head from "next/head";
import Layout from "../components/Layout";
import UserProfile from "../components/UserProfile";

const mockUser = {
  name: "Jan Kowalski",
  email: "jankowalski@pandora.uk",
  memberSince: "365 dni, 3 miesiący, 24 dni",
  completedTransactions: 1234,
  rating: 4,
  avatar: "/api/placeholder/80/80",
};

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profil użytkownika - MarketSpot</title>
      </Head>
      <Layout>
        <div className="container mx-auto px-4 py-6">
          <UserProfile user={mockUser} />
        </div>
      </Layout>
    </>
  );
}
