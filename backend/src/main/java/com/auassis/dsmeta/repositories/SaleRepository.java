package com.auassis.dsmeta.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.auassis.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

	@Query("SELECT s from Sale s where s.date BETWEEN :min AND :max ORDER BY s.amount DESC")
	Page<Sale> findSales(LocalDate min, LocalDate max, Pageable pegeable);
	
}
