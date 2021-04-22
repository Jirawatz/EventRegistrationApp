package com.eventregistration.application.controller;

import com.eventregistration.application.model.Host;
import com.eventregistration.application.model.Register;
import com.eventregistration.application.repository.HostRepository;
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
@RequestMapping("/host/api")
@CrossOrigin(origins = "http://localhost:3000")
public class HostORM {

    @Autowired
    HostRepository hostRepository;

    @GetMapping(value = "/all")
    public List<Host> allCustomer() {
        return (List<Host>) hostRepository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Host findById(@PathVariable("id") int id) {
        return hostRepository.findHostById(id);
    }

    @PostMapping(value = "/create")
    public Host createHost(@RequestBody Host host) {
        return hostRepository.save(host);
    }

    @PutMapping(value = "/update/{hostid}")
    public Host updateHost(@PathVariable("hostid") int hostid, @RequestBody Host host) {
        Host currentHost = hostRepository.findHostById(hostid);
        currentHost.setEvents(host.getEvents());
        currentHost.setOrganizer(host.getOrganizer());
        return hostRepository.save(currentHost);
    }

    @DeleteMapping(value ="/delete/{hostid}")
    public void deleteHost(@PathVariable("hostid") int hostid) {
        hostRepository.deleteById(hostid);
    }

    @GetMapping(value = "/name/{eventorganizer}")
    public List<Host> findHostByEventAndOrganizer(@PathVariable("eventorganizer") String eventorganizer) {
        return hostRepository.findHostByEventAndOrganizer(eventorganizer);
    }

}
