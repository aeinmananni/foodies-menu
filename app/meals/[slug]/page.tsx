import { MealsDetails } from "@/components";

type ParamsProps = {
  params: {
    slug: string;
  };
};

export default function MealsDetaisPage({ params }: ParamsProps) {
  return <MealsDetails slugId={+params.slug} />;
}
