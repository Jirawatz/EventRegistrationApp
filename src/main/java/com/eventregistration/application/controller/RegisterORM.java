package com.eventregistration.application.controller;

import com.eventregistration.application.model.Register;
import com.eventregistration.application.repository.RegisterRepository;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/register/api")
@CrossOrigin(origins = "http://localhost:3000")
public class RegisterORM {

    @Autowired
    RegisterRepository registerRepository;

    @GetMapping(value = "/all")
    public List<Register> allRegister() {
        return (List<Register>) registerRepository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Register findById(@PathVariable("id") int id) {
        return registerRepository.findRegisterById(id);
    }

    @PostMapping(value = "/create")
    public Register createRegister(@RequestBody Register register) {
        return registerRepository.save(register);
    }

    @PutMapping(value = "/update/{regid}")
    public Register updateRegister(@PathVariable("regid") int regid, @RequestBody Register register) {
        Register currentRegister = registerRepository.findRegisterById(regid);
        currentRegister.setCustomerid(register.getCustomerid());
        currentRegister.setEventid(register.getEventid());
        return registerRepository.save(currentRegister);
    }

    @DeleteMapping(value ="/delete/{regid}")
    public void deleteRegister(@PathVariable("regid") int regid) {
        registerRepository.deleteById(regid);
    }


}
