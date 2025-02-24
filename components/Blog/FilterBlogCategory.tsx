"use client";
import { Checkbox } from "@heroui/checkbox";
import { CheckboxGroup } from "@heroui/checkbox";
import React, { useState } from "react";

interface FilterBlogCategoryProps {
  onCategoriesChange: (categories: string[]) => void;
}

export default function FilterBlogCategory({
  onCategoriesChange,
}: FilterBlogCategoryProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (values: string[]) => {
    setSelectedCategories(values);
    onCategoriesChange(values);
  };

  return (
    <div className="mb-8 md:mb-16">
      <h3 className="text-center lg:text-start lg:ml-7 font-semibold">
        Catégories du blog
      </h3>
      <CheckboxGroup
        orientation="horizontal"
        className="flex w-full overflow-x-scroll lg:overflow-x-visible [&>div]:!flex [&>div]:!flex-nowrap [&>div]:!gap-4 lg:[&>div]:!flex-col py-8 lg:py-0 lg:mt-5 px-7"
        value={selectedCategories}
        onValueChange={handleCategoryChange}
      >
        <Checkbox className="h-10 min-w-fit" value="particuliers">
          Particuliers
        </Checkbox>
        <Checkbox className="h-10 min-w-fit" value="aides-etat">
          Aides de l&apos;État
        </Checkbox>
        <Checkbox className="h-10 min-w-fit" value="societe">
          Société
        </Checkbox>
        <Checkbox className="h-10 min-w-fit" value="passer-au-solaire">
          Passer au Solaire
        </Checkbox>
        <Checkbox className="h-10 min-w-fit" value="technologie-solaire">
          Technologie Solaire
        </Checkbox>
        <Checkbox className="h-10 min-w-fit" value="pionniers-energie-solaire">
          Pionniers de l&apos;Énergie Solaire
        </Checkbox>
      </CheckboxGroup>
    </div>
  );
}
