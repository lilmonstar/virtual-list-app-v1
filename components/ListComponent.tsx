import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

import {useRouter} from 'next/navigation'

import { RowProps } from "@/interface/Row";
import { Products } from "@/interface/Products";

import clsx from "clsx"

interface ListComponentProps{
  products: Products
  loadMore: ()=> void
}

const ListComponent: React.FC<ListComponentProps> = ({products, loadMore}) => {
  const router = useRouter();

  const Row = ({ index, style, products }:RowProps) => (
    <div onClick={()=> router.push(`/products/${products?.products[index].id}`)} className={clsx("cursor-pointer flex items-center justify-start group", index%2 ? 'bg-gray-200' : 'bg-gray-50')} style={style}>
      <div className="flex text-sm md:text-base truncate justify-center gap-4 md:gap-8 items-center group-hover:scale-105 group-hover:font-semibold mx-4 ease-in duration-200">
        <p>Item {index + 1}</p>
        <p className="truncate">{products?.products[index].title}</p>
      </div>
    </div>
  )

  return (
    <InfiniteLoader
      isItemLoaded={index=> index < products?.limit}
      itemCount={products?.total}
      loadMoreItems={loadMore}
    >
      {({ onItemsRendered, ref }) => (
        <List
            height={700}
            itemCount={products?.limit}
            itemSize={35}
            width='100%'
            onItemsRendered={onItemsRendered}
            ref={ref}
            className="rounded-md border-2 border-gray-600 overflow-hidden m-auto"
        >
          {({ index, style })=> <Row index={index} style={style} products={products} />}
        </List>
      )}
    </InfiniteLoader>
  )
}

export default ListComponent