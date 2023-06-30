import { Despesa } from "./../models/despesa.model";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class DespesaController {
  async cadastrar(request: Request, response: Response): Promise<Response> {
    let despesa: Despesa = new Despesa();
    despesa.descricao = request.body.descricao;
    despesa.preco = Number.parseInt(request.body.preco);

    const despesaCadatrada = await prisma.despesa.create({
      data: {
        descricao: despesa.descricao,
        preco: despesa.preco,
      },
    });

    return response.status(201).json({ message: "Despesa cadastrada!", dados: despesaCadatrada });
  }

  async listar(request: Request, response: Response) : Promise<Response>{
    try {
      const listaDespesas = await prisma.despesa.findMany()

      return response.status(200).json({
        message: "Lista de cadastro", lista : listaDespesas
      })
    } catch (error) {
      return response.status(404).json({
        message: "Lista não encontrada", erro : error
      })
    }
  }

  async calcularMedia(request: Request, response: Response) : Promise<Response>{
    try{
      const numeroDespesas = await prisma.despesa.count()
      const listaDespesas = await prisma.despesa.findMany()
      let total = 0;
      let media = 0;
      listaDespesas.map((despesa) => {
        total += despesa.preco;
      })

      media = total / numeroDespesas;
      
      return response.status(200).json({
        message: "Cálculo feito!", total: total, media : media
      })
      } catch (error) {
      return response.status(404).json({
        message: "Erro ao calcular", erro : error
      })
    }
  }
}
