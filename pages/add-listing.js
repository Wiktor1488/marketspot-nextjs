// pages/add-listing.js
import Head from "next/head";
import Layout from "../components/Layout";
import AddListingForm from "../components/AddListingForm";

export default function AddListing() {
  return (
    <>
      <Head>
        <title>Add Listing - MarketSpot</title>
      </Head>
      <Layout>
        <div className="container mx-auto px-4 py-6">
          <AddListingForm />
        </div>
      </Layout>
    </>
  );
}
