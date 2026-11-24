import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  findAll() {
    return [
      { id: 'classic', name: 'Classic Makhana', price: 249, size: '100 g' },
      { id: 'seeded', name: 'Classic Makhana', price: 229, size: '100 g' }
    ];
  }
}
