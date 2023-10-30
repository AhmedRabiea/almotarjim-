import Attachment from "@/components/Attatchment";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HiDownload } from "react-icons/hi";
import Chat from "@/containers/Chat";
import { useEffect, useState } from "react";
import Request from "@/interfaces/request";
import RequestService from "@/services/request.service";
import { useParams } from "react-router-dom";
import useI18n from "@/hooks/useI18n";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Combobox from "@/components/Combobox";
import { Textarea } from "@/components/ui/textarea";
import { useQuery } from "react-query";
import User from "@/interfaces/user";
import AuthService from "@/services/auth.service";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const requestStatusVariants: any = {
  PENDING: "warning",
  FINISHED: "success",
  default: "default",
};

const SingleRequest = () => {
  const { t } = useI18n();

  const [request, setRequest] = useState<Request>();
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  const getRequest = async () => {
    setLoading(true);
    const request = await RequestService.getRequest(id || "").catch(
      console.log
    );
    setRequest(request);
    setLoading(false);
  };

  // reopen
  const [isReopenDialogOpen, setIsReopenDialogOpen] = useState(false);
  const [reopenNotes, setReopenNotes] = useState("");

  // reassign
  const { isLoading: isTranslatorsLoading, data: translators } = useQuery<
    User[]
  >("requestTranslators", () => AuthService.getUsersByRole("translator"), {});

  const [isReassignDialogOpen, setIsReassignDialogOpen] = useState(false);
  const [reassignedTranslator, setReassignedTranslator] = useState("");

  // approve
  const [isApproveDialogOpen, setIsApproveDialogOpen] = useState(false);

  const onReopen = () => {
    console.log(reopenNotes);
    setReopenNotes("");
    setIsReopenDialogOpen(false);
  };

  const onReassign = async () => {
    const res = await RequestService.assignRequest(
      id || "",
      reassignedTranslator
    );
    console.log(res);
    setReassignedTranslator("");
    setIsReassignDialogOpen(false);
  };

  const onApprove = () => {
    console.log("approve");
    setIsApproveDialogOpen(false);
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div className="page flex-1">
      {loading && <p>loading...</p>}
      {!loading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full lg:overflow-hidden lg:auto-rows-fr">
          {/* Grid Item 1 */}
          <div className="bg-white p-4 rounded-xl overflow-y-auto">
            {/* details */}
            <div className="flex flex-col gap-2">
              <h2>{t("user.singleRequest.basicInfo")}</h2>
              <p>
                <b className="text-primary">
                  {t("user.singleRequest.requestId")}{" "}
                </b>
                {request?.id}
              </p>
              <p>
                <b className="text-primary">
                  {t("user.singleRequest.service")}{" "}
                </b>
                {request?.service?.title}
              </p>
              <p>
                <b className="text-primary">
                  {t("user.singleRequest.translator")}{" "}
                </b>
                {request?.translator?.name}
              </p>
              <p>
                <b className="text-primary">
                  {t("user.singleRequest.status")}{" "}
                </b>
                <Badge
                  variant={requestStatusVariants[request?.status || "default"]}
                >
                  {request?.status}
                </Badge>
              </p>
              <p>
                <b className="text-primary">
                  {t("user.singleRequest.description")}{" "}
                </b>
                {request?.description}
              </p>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div className="h-full max-h-[500px] lg:max-h-none row-span-2 overflow-y-auto flex-1 flex flex-col gap-4 bg-white p-4 rounded-xl">
            <div className="flex gap-2">
              <Button onClick={() => setIsApproveDialogOpen(true)}>
                Approve
              </Button>
              <Button onClick={() => setIsReassignDialogOpen(true)}>
                Assign
              </Button>
            </div>
            <Chat {...request?.chat} />
          </div>

          {/* Grid Item 3 */}
          <div className="bg-white overflow-y-auto p-4 rounded-xl">
            <div className="flex flex-col gap-2">
              <div className="head flex flex-wrap justify-between mb-4">
                <h2>{t("user.singleRequest.attachments")}</h2>
                <Button size="sm" variant="subtle">
                  <HiDownload />
                  {t("user.singleRequest.downloadAll")}
                </Button>
              </div>
              {request?.files?.map((file) => (
                <Attachment {...file}></Attachment>
              ))}
            </div>
          </div>

          {/* Grid Item 4 */}
          {request?.translations?.length && (
            <div className="bg-white overflow-y-auto p-4 rounded-xl">
              <div className="flex flex-col gap-2">
                <div className="head flex flex-wrap justify-between mb-4">
                  <h2>{t("user.singleRequest.translations")}</h2>
                  <Button size="sm" variant="subtle">
                    <HiDownload />
                    {t("user.singleRequest.downloadAll")}
                  </Button>
                </div>
                {request?.translations?.map((file) => (
                  <Attachment {...file}></Attachment>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* reopen dialog */}
      <Dialog open={isReopenDialogOpen} onOpenChange={setIsReopenDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are your sure to reopen this request?</DialogTitle>
            <DialogDescription>
              <Textarea
                placeholder="Any notes you want to attach..."
                value={reopenNotes}
                onChange={(e) => setReopenNotes(e.target.value)}
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={onReopen}>Reopen</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* reassign dialog */}
      <Dialog
        open={isReassignDialogOpen}
        onOpenChange={setIsReassignDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reassign to another translator?</DialogTitle>
            <DialogDescription asChild>
              <>
                <p>
                  Are your sure to reassign this request to another translator
                </p>

                <Select onValueChange={setReassignedTranslator}>
                  <SelectTrigger>
                    <SelectValue placeholder="choose translator..." />
                  </SelectTrigger>
                  <SelectContent>
                    {translators?.data.map((translator) => (
                      <SelectItem value={translator.id}>
                        {translator.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={onReassign}>Reassign</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* approve dialog */}
      <Dialog open={isApproveDialogOpen} onOpenChange={setIsApproveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are your sure to reopen this request?</DialogTitle>
            <DialogDescription>
              Are you sure you want to approve note: this is permanent
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogTrigger asChild>
              <Button variant="subtle">Cancel</Button>
            </DialogTrigger>
            <Button onClick={onApprove}>Approve</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SingleRequest;
