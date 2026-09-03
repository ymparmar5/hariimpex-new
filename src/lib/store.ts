import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from './catalog';

export interface CartItem {
  product: Product;
  quantity: number;
  customSpecs?: Record<string, string>;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
}

interface AppState {
  cart: CartItem[];
  quotes: QuoteItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  
  addToQuotes: (product: Product, quantity?: number) => void;
  removeFromQuotes: (productId: string) => void;
  clearQuotes: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      cart: [],
      quotes: [],
      
      addToCart: (product, quantity = 1) =>
        set((state) => {
          const existing = state.cart.find(item => item.product.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map(item =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { product, quantity }] };
        }),
        
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter(item => item.product.id !== productId),
        })),
        
      updateCartQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map(item =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        })),
        
      clearCart: () => set({ cart: [] }),
      
      addToQuotes: (product, quantity = 1) =>
        set((state) => {
          const existing = state.quotes.find(item => item.product.id === product.id);
          if (existing) return state; // Quote list usually doesn't need quantity updates like a cart, just unique items to quote
          return { quotes: [...state.quotes, { product, quantity }] };
        }),
        
      removeFromQuotes: (productId) =>
        set((state) => ({
          quotes: state.quotes.filter(item => item.product.id !== productId),
        })),
        
      clearQuotes: () => set({ quotes: [] }),
    }),
    {
      name: 'hari-impex-storage',
    }
  )
);
