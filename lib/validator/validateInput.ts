import { ZodSchema } from "zod";
import { NextRequest, NextResponse } from "next/server";

export function withValidation<T>(
  schema: ZodSchema<T>,
  handler: (req: NextRequest, data: T) => Promise<NextResponse>
) {
  return async function (req: NextRequest) {
    try {
      const { data } = await req.json();
      const parsedData = schema.safeParse(data);

      if (!parsedData.success) {
        return NextResponse.json(
          { errors: parsedData.error.errors },
          { status: 400 }
        );
      }

      return handler(req, parsedData.data);
    } catch (error) {
      console.error("Error in validation middleware:", error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  };
}
