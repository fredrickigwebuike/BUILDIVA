export interface BuildivaHealth { status: string; version: string; timestamp: string; }
export interface BuildivaProduct { id: string; name: string; category: string | null; description: string | null; unit: string | null; price: number | null; stockStatus: string | null; supplierId: string | null; }
export interface BuildivaOrder { id: string; status: string; paymentStatus: string; total: unknown; currency: string; createdAt: unknown; }
export interface BuildivaProductList { data: { items: BuildivaProduct[] } }
export interface BuildivaOrderList { data: { items: BuildivaOrder[] } }
export interface BuildivaRFQList { data: { items: Record<string, unknown>[] } }
