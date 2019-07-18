import React from 'react';
import Link from 'next/link';

export interface Listing {
  id: number;
  name: string;
  featured?: boolean;
}

interface ListingsProps {
  listings: Array<Listing>;
}

export default function(props: ListingsProps) {
  const listings = props.listings

  const listItems = listings.map(listing =>
    <li key={listing.id}>
      <Link href="listings/[id]" as={`/listings/${listing.id}`}>
        <a>
          {listing.name}
          {listing.featured &&
            <span style={{marginLeft: '20px'}}><em>Featured</em></span>
          }
        </a>
      </Link>
    </li>
  )

  return (
    <ul className="list-disc ml-8 mt-3 mb-3">{listItems}</ul>
  )
}