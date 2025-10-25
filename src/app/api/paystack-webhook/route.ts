// src/app/api/paystack-webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    if (body.event === 'charge.success') {
      const studentId = body.data.meta?.studentId;
      const customerCode = body.data.customer?.customer_code;

      if (studentId && customerCode) {
        await supabase
          .from('students')
          .update({ 
            paystack_customer_code: customerCode,
            subscription_status: 'active'
          })
          .eq('id', studentId);
      }
    }

    // Handle recurring invoices (future)
    if (body.event === 'invoice.payment_succeeded') {
      const customerCode = body.data.customer?.customer_code;
      if (customerCode) {
        await supabase
          .from('students')
          .update({ subscription_status: 'active' })
          .eq('paystack_customer_code', customerCode);
      }
    }

    if (body.event === 'invoice.payment_failed') {
      const customerCode = body.data.customer?.customer_code;
      if (customerCode) {
        await supabase
          .from('students')
          .update({ subscription_status: 'suspended' })
          .eq('paystack_customer_code', customerCode);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}