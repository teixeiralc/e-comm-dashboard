'use client'

import { Button } from '@/components/ui/button'
import { IProduct } from '@/lib/types/db-types'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowUpDown } from 'lucide-react'
import Link from 'next/link'

export const productColumns: ColumnDef<IProduct>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button
        className="px-0 py-0 has-[>svg]:px-0"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Nome
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const product = row.original

      return (
        <Link href={`/dashboard/produtos/${product.id}`} prefetch={false} className="hover:underline">
          {product.name}
        </Link>
      )
    },
  },
  {
    accessorKey: 'buy_price',
    header: ({ column }) => (
      <Button
        className="px-0 py-0 has-[>svg]:px-0"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Preço de Custo
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const buyPrice = parseFloat(row.getValue('buy_price'))
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(buyPrice)

      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: 'retail_price',
    header: ({ column }) => (
      <Button
        className="px-0 py-0 has-[>svg]:px-0"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Preço de Venda
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const retailPrice = parseFloat(row.getValue('retail_price'))
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(retailPrice)

      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: 'stock',
    header: ({ column }) => (
      <Button
        className="px-0 py-0 has-[>svg]:px-0"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Estoque
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: 'category',
    header: ({ column }) => (
      <Button
        className="px-0 py-0 has-[>svg]:px-0"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Categoria
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <Button
        className="px-0 py-0 has-[>svg]:px-0"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Criado em
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const createdAt = String(row.getValue('created_at'))
      const formatted = format(new Date(createdAt), 'dd/MMM/yyyy', { locale: ptBR })
      return <div>{formatted}</div>
    },
  },
]
