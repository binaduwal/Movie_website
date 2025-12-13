import { ArrowLeft, Wrench } from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const NotFoundMoviePage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-950 to-teal-900/20" />

      <Card className="relative z-10 w-full max-w-3xl rounded-xl border border-teal-600/40 bg-slate-900 shadow-lg">
        <CardContent className="flex items-center gap-10 p-8">
          <div className="flex w-1/4 min-w-[150px] flex-col items-center gap-3 text-center">
            <Wrench className="h-14 w-14 text-teal-400" />
            <p className="text-sm font-semibold uppercase text-teal-300">
              System Assistant Unavailable
            </p>
          </div>

          <div className="w-3/4 space-y-4">
            <h1 className="text-7xl font-bold text-teal-400 leading-none">
              404
            </h1>

            <div className="border-b border-teal-600 pb-2">
              <h2 className="text-2xl font-semibold uppercase tracking-wide text-slate-100">
                Resource Not Found
              </h2>
            </div>

            <p className="text-lg text-slate-300">
              The requested URL was not found on the server. If you entered the
              URL manually please check your spelling and try again.{" "}
            </p>

            <div className="pt-3">
              <Button
                onClick={() => (window.location.href = "/")}
                className="flex items-center gap-2 bg-teal-600 px-6 py-3 text-white hover:bg-teal-700"
              >
                <ArrowLeft className="h-4 w-4" />
                Return to Dashboard
              </Button>
            </div>

            <p className="pt-2 text-xs text-slate-500">
              Error Code: 404 — Page Not Found
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundMoviePage;
