import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// esto es una opcion de Next.js, para evitar quer cachee de forma
// estatica la ruta y que siempre se ejecute en el servidor 
export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code){
        const supabase = createRouteHandlerClient({ cookies })
        // usando el codigo que le hemos pasado por URL
        // nos devuelve la sesion del usuario
        await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(requestUrl.origin)
}