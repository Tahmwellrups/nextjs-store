import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

function BreadCrumbs({ name }: { name: string }) {
  return (
    // <Breadcrumb>
    //   <BreadcrumbList>
    //     <BreadcrumbItem>
    //       <BreadcrumbLink href="/" className="capitalize text-lg">
    //         home
    //       </BreadcrumbLink>
    //     </BreadcrumbItem>
    //     <BreadcrumbItem>
    //       <BreadcrumbLink href="/" className="capitalize text-lg">
    //         products
    //       </BreadcrumbLink>
    //     </BreadcrumbItem>
    //     <BreadcrumbItem>
    //       <BreadcrumbLink href="/" className="capitalize text-lg">
    //         {name}
    //       </BreadcrumbLink>
    //     </BreadcrumbItem>
    //   </BreadcrumbList>
    // </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="capitalize text-md">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products" className="capitalize text-md">
            Products
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize text-md">{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumbs
