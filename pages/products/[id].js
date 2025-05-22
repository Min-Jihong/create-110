import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ProductImageGallery } from '@/components/products/ProductImageGallery';
import { ProductPrice } from '@/components/products/ProductPrice';
import { ProductOptionSelector } from '@/components/products/ProductOptionSelector';
import { QuantitySelector } from '@/components/products/QuantitySelector';
import { AddToCartButton } from '@/components/products/AddToCartButton';
import { StockStatus } from '@/components/products/StockStatus';
import { ProductDescription } from '@/components/products/ProductDescription';
import { ProductReviews } from '@/components/products/ProductReviews';
import { RelatedProducts } from '@/components/products/RelatedProducts';

export default function ProductPage({ product }) {
  // 페이지 구현
}