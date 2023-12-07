import Sheet from "../_components/Sheet";

export default function Page() {
  async function formAction(formData: FormData) {
    "use server";
    const headers = new Headers([
      ["Content-Type", "application/json"],
      ["Authorization", "Baser" + process.env.SENDGRID_API_KEY],
    ]);
    const requestBody = {
      personalizations: [
        {
          to: [
            {
              email: formData.get("email"),
            },
          ],
        },
      ],
      subject: "お問い合わせを受け付けました。",
      from: {
        email: "y.handai1272@gmail.com",
      },
      content: [
        {
          type: "text/plain",
          value:
            "以下の内容でお問い合わせを受け付けました。\r\n------\r\n" +
            formData.get("content"),
        },
      ],
    };
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });
  }

  return (
    <>
      <Sheet>
        <div className="max-w-md mx-auto mt-4 bg-white p-6 rounded shadow-md">
          <h1 className="text-xl font-bold mb-4">お問い合わせフォーム</h1>
          <form action={formAction}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-600"
              >
                お問い合わせ内容
              </label>
              <textarea
                id="content"
                name="content"
                rows={4}
                required
                className="mt-1 p-2 w-full border rounded-md"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-2 rounded text-white bg-blue-600 hover:bg-blue-700"
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </Sheet>
    </>
  );
}
