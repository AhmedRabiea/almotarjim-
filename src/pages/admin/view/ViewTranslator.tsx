import { DataTable } from "@/components/Datatable";
import { Button } from "@/components/ui/button";
import useI18n from "@/hooks/useI18n";
import AdminService from "@/services/admin.service";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewTranslator = () => {
  const { t } = useI18n();
  const { id = "" } = useParams();
  const [translator, setTranslator] = useState<any>();
  const [translatorHistory, setTranslatorHistory] = useState<any>();

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "id",
      header: t("admin.viewTranslator.id"),
      cell: ({ row }) => <span>{row.index + 1}</span>,
    },
    {
      accessorKey: "pagse",
      header: t("admin.viewTranslator.pagesNumber"),
    },
    {
      accessorKey: "created_at",
      header: t("admin.viewTranslator.createdAt"),
      cell: ({ row }) => (
        <span>
          {moment(row.original.created_at).format("YYYY-MM-DD HH:MM A")}
        </span>
      ),
    },
  ];

  const getTranslator = useCallback(async () => {
    const translator = await AdminService.getUser(id);
    setTranslator(translator.data);
  }, [id]);

  const getTranslatorHistory = useCallback(async () => {
    const translatorHistory = await AdminService.getTranslatorHistory(id);
    setTranslatorHistory(translatorHistory.date);
  }, [id]);

  useEffect(() => {
    getTranslator();
  }, [getTranslator]);
  useEffect(() => {
    getTranslatorHistory();
  }, [getTranslatorHistory]);

  return (
    <div className="view-translator">
      <img src={translator?.image} alt="" />
      <h1>{translator?.name}</h1>
      <p>{translator?.email}</p>
      <p>
        {t("admin.viewTranslator.totalPages")}: {translatorHistory?.total}
      </p>

      <DataTable columns={columns} data={translatorHistory?.details || []} />

      <div className="flex justify-end py-4">
        <a href={translatorHistory?.excel}>
          <Button>Download Excel</Button>
        </a>
      </div>
    </div>
  );
};

export default ViewTranslator;
