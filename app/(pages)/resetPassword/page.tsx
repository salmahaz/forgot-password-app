import ResetPasswordForm from "@/components/sections/ResetPassword"


export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams:  Promise<{ token ?: string }>
}) {

  const resolvedParams = await searchParams;
  const token = resolvedParams.token || "";
  return <ResetPasswordForm token={token} />
}
