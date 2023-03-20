/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Modelo;
import java.util.ArrayList;


/**
 *
 * @author elliotfrias
 */
public class Producto {
    private String nombreProd;
    private int uniProd;
    private float precioProd;

    public Producto() {
    }

    public Producto(String nombreProd, int uniProd, float precioProd) {
        this.nombreProd = nombreProd;
        this.uniProd = uniProd;
        this.precioProd = precioProd;
    }

    public String getNombreProd() {
        return nombreProd;
    }

    public int getUniProd() {
        return uniProd;
    }

    public float getPrecioProd() {
        return precioProd;
    }

    public void setNombreProd(String nombreProd) {
        this.nombreProd = nombreProd;
    }

    public void setUniProd(int uniProd) {
        this.uniProd = uniProd;
    }

    public void setPrecioProd(float precioProd) {
        this.precioProd = precioProd;
    }
    
    public void ProductoCuent (String nombreProd, int uniProd, float precioProd){
        ArrayList<ArrayList> productos = new ArrayList<ArrayList>();
        productos.add(nombreProd);
        productos.add(uniProd);
        productos.add(precioProd);
    }
    
}
